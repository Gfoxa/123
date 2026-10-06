import test from "node:test";
import assert from "node:assert/strict";
import { buildOrganizationJsonLd, serializeStructuredData } from "./structured-data";

test("organization structured data is omitted while the site identity is still demo content", () => {
  const jsonLd = buildOrganizationJsonLd({
    organizationName: "Ruang Rimba",
    description: "[Ganti dengan deskripsi organisasi]",
    email: "",
    whatsapp: "",
    instagramUrl: "",
    facebookUrl: "",
    youtubeUrl: "",
  }, "https://ruangrimba.example");

  assert.equal(jsonLd, null);
});

test("organization structured data includes only configured HTTPS profiles and contacts", () => {
  const jsonLd = buildOrganizationJsonLd({
    organizationName: "Rimba",
    description: "Belajar bersama alam.",
    email: "halo@example.id",
    whatsapp: "6281234567890",
    instagramUrl: "https://instagram.com/rimba",
    facebookUrl: "http://unsafe.example/rimba",
    youtubeUrl: "",
  }, "https://ruangrimba.example/base");

  assert.ok(jsonLd);
  assert.deepEqual(jsonLd.sameAs, ["https://instagram.com/rimba"]);
  assert.deepEqual(jsonLd.contactPoint, [{
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "halo@example.id",
    telephone: "+6281234567890",
  }]);
});

test("JSON-LD serialization escapes script-closing and HTML-sensitive characters", () => {
  const serialized = serializeStructuredData({ text: "</script><script>alert('&')</script>" });
  assert.equal(serialized.includes("</script>"), false);
  assert.ok(serialized.includes("\\u003c/script\\u003e"));
  assert.ok(serialized.includes("\\u0026"));
});
