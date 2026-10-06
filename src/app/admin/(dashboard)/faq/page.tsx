import { CmsManager, type AdminField } from "@/components/admin/cms-manager";
import { prisma } from "@/lib/db/prisma";
import { toAdminRows } from "@/server/cms/admin-view";
import { saveFaq } from "../actions";

export const dynamic = "force-dynamic";

const fields: AdminField[] = [
  { name: "question", label: "Pertanyaan", required: true },
  { name: "answer", label: "Jawaban", kind: "textarea", required: true },
  { name: "category", label: "Kategori", required: true },
  { name: "sortOrder", label: "Urutan", kind: "number", required: true },
  { name: "published", label: "Status publikasi", kind: "select", options: [{ value: "false", label: "Draf" }, { value: "true", label: "Terbit" }], required: true },
];

export default async function FAQAdminPage({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  const { error } = await searchParams;
  let rows = [] as Awaited<ReturnType<typeof prisma.fAQ.findMany>>;
  let dbError = false;
  try { rows = await prisma.fAQ.findMany({ orderBy: [{ category: "asc" }, { sortOrder: "asc" }] }); }
  catch { dbError = true; }
  return <CmsManager title="Pertanyaan umum" description="Kelola pertanyaan publik, kategori, dan urutan tampil." fields={fields} rows={toAdminRows(rows)} action={saveFaq} error={error || (dbError ? "Database belum tersedia. Atur DATABASE_URL dan jalankan migrasi." : undefined)} />;
}
