export type OrganizationStructuredDataSettings = {
  organizationName: string;
  description: string;
  email?: string;
  whatsapp?: string;
  instagramUrl?: string;
  facebookUrl?: string;
  youtubeUrl?: string;
};

export type JsonLd = Record<string, unknown>;

function validHttpsUrl(value: string | undefined): string | undefined {
  if (!value) return undefined;
  try {
    const url = new URL(value);
    return url.protocol === "https:" ? url.toString() : undefined;
  } catch {
    return undefined;
  }
}

export function buildOrganizationJsonLd(settings: OrganizationStructuredDataSettings, siteUrl: string): JsonLd | null {
  const organizationName = settings.organizationName.trim();
  const description = settings.description.trim();
  if (!organizationName || organizationName === "Ruang Rimba" || organizationName.startsWith("[") || description.includes("[Ganti dengan deskripsi organisasi]")) return null;

  const email = settings.email?.trim();
  const telephone = settings.whatsapp && /^\d{8,15}$/.test(settings.whatsapp) ? `+${settings.whatsapp}` : undefined;
  const contactPoint = email || telephone ? [{
    "@type": "ContactPoint",
    contactType: "customer service",
    ...(email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? { email } : {}),
    ...(telephone ? { telephone } : {}),
  }] : undefined;
  const sameAs = [settings.instagramUrl, settings.facebookUrl, settings.youtubeUrl]
    .map(validHttpsUrl)
    .filter((url): url is string => Boolean(url));

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: organizationName,
    description,
    url: new URL("/", siteUrl).toString(),
    ...(contactPoint ? { contactPoint } : {}),
    ...(sameAs.length ? { sameAs } : {}),
  };
}

export function serializeStructuredData(data: JsonLd): string {
  return JSON.stringify(data).replace(/[<>&\u2028\u2029]/g, (character) => {
    const escapes: Record<string, string> = {
      "<": "\\u003c",
      ">": "\\u003e",
      "&": "\\u0026",
      "\u2028": "\\u2028",
      "\u2029": "\\u2029",
    };
    return escapes[character] ?? character;
  });
}
