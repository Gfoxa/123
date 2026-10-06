import test from "node:test";
import assert from "node:assert/strict";
import { config } from "dotenv";

function form(values: Record<string, string>) {
  const data = new FormData();
  for (const [key, value] of Object.entries(values)) data.set(key, value);
  return data;
}

test("program CMS supports create, update, publish, archive and audited deletion", async () => {
  config({ path: ".env.local" });
  const [{ prisma }, { saveCmsEntity }] = await Promise.all([
    import("@/lib/db/prisma"),
    import("./service"),
  ]);
  const suffix = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  const email = `phase3-${suffix}@example.com`;
  let actorId: string | undefined;
  let programId: string | undefined;

  try {
    const actor = await prisma.user.create({ data: { email, role: "ADMIN" } });
    actorId = actor.id;
    programId = await saveCmsEntity("program", actor.id, form({
      title: "Uji Program", slug: `uji-program-${suffix}`, category: "Team Building",
      shortDescription: "Ringkasan uji.", description: "Deskripsi uji.", status: "DRAFT",
    }));
    const created = await prisma.program.findUnique({ where: { id: programId } });
    assert.equal(created?.status, "DRAFT");

    await saveCmsEntity("program", actor.id, form({
      id: programId, title: "Uji Program Diperbarui", slug: `uji-program-${suffix}`, category: "Team Building",
      shortDescription: "Ringkasan baru.", description: "Deskripsi uji.", status: "PUBLISHED",
    }));
    const published = await prisma.program.findUnique({ where: { id: programId } });
    assert.equal(published?.title, "Uji Program Diperbarui");
    assert.equal(published?.status, "PUBLISHED");
    assert.ok(published?.publishedAt);

    await saveCmsEntity("program", actor.id, form({ id: programId, _intent: "archive" }));
    assert.equal((await prisma.program.findUnique({ where: { id: programId } }))?.status, "ARCHIVED");
    await saveCmsEntity("program", actor.id, form({ id: programId, _intent: "delete" }));
    assert.equal(await prisma.program.findUnique({ where: { id: programId } }), null);

    const operations = await prisma.auditLog.findMany({ where: { entity: "program", entityId: programId }, select: { operation: true } });
    assert.deepEqual(new Set(operations.map(({ operation }) => operation)), new Set(["CREATE", "UPDATE", "ARCHIVE", "DELETE"]));
  } finally {
    if (programId) await prisma.auditLog.deleteMany({ where: { entity: "program", entityId: programId } });
    if (programId) await prisma.program.deleteMany({ where: { id: programId } });
    if (actorId) await prisma.user.delete({ where: { id: actorId } });
    await prisma.$disconnect();
  }
});

test("FAQ CMS supports create, update, publish, archive and audited deletion", async () => {
  config({ path: ".env.local" });
  const [{ prisma }, { saveCmsEntity }] = await Promise.all([
    import("@/lib/db/prisma"),
    import("./service"),
  ]);
  const suffix = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  const email = `phase3-faq-${suffix}@example.com`;
  let actorId: string | undefined;
  let faqId: string | undefined;

  try {
    const actor = await prisma.user.create({ data: { email, role: "ADMIN" } });
    actorId = actor.id;
    faqId = await saveCmsEntity("faq", actor.id, form({
      question: `FAQ ${suffix}`, answer: "Jawaban awal.", category: "Program", sortOrder: "3", published: "false",
    }));
    assert.equal((await prisma.fAQ.findUnique({ where: { id: faqId } }))?.published, false);

    await saveCmsEntity("faq", actor.id, form({
      id: faqId, question: `FAQ ${suffix}`, answer: "Jawaban diperbarui.", category: "Persiapan", sortOrder: "1", published: "true",
    }));
    const published = await prisma.fAQ.findUnique({ where: { id: faqId } });
    assert.equal(published?.answer, "Jawaban diperbarui.");
    assert.equal(published?.published, true);
    assert.equal(published?.category, "Persiapan");

    await saveCmsEntity("faq", actor.id, form({ id: faqId, _intent: "archive" }));
    assert.equal((await prisma.fAQ.findUnique({ where: { id: faqId } }))?.published, false);
    await saveCmsEntity("faq", actor.id, form({ id: faqId, _intent: "delete" }));
    assert.equal(await prisma.fAQ.findUnique({ where: { id: faqId } }), null);

    const operations = await prisma.auditLog.findMany({ where: { entity: "faq", entityId: faqId }, select: { operation: true } });
    assert.deepEqual(new Set(operations.map(({ operation }) => operation)), new Set(["CREATE", "UPDATE", "ARCHIVE", "DELETE"]));
  } finally {
    if (faqId) await prisma.auditLog.deleteMany({ where: { entity: "faq", entityId: faqId } });
    if (faqId) await prisma.fAQ.deleteMany({ where: { id: faqId } });
    if (actorId) await prisma.user.delete({ where: { id: actorId } });
    await prisma.$disconnect();
  }
});
