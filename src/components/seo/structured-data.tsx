import type { JsonLd } from "@/lib/structured-data";
import { serializeStructuredData } from "@/lib/structured-data";

export function StructuredData({ data }: { data: JsonLd }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeStructuredData(data) }} />;
}
