import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { randomUUID } from "node:crypto";
import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { isAdminRole } from "@/server/auth/roles";

export const runtime = "nodejs";

const MAX_FILE_SIZE = 12 * 1024 * 1024;
const imageTypes = new Map<string, { extension: string; signature: (bytes: Uint8Array) => boolean }>([
  ["image/jpeg", { extension: "jpg", signature: (bytes) => bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff }],
  ["image/png", { extension: "png", signature: (bytes) => bytes[0] === 0x89 && bytes[1] === 0x50 && bytes[2] === 0x4e && bytes[3] === 0x47 }],
  ["image/webp", { extension: "webp", signature: (bytes) => String.fromCharCode(...bytes.slice(0, 4)) === "RIFF" && String.fromCharCode(...bytes.slice(8, 12)) === "WEBP" }],
  ["image/gif", { extension: "gif", signature: (bytes) => String.fromCharCode(...bytes.slice(0, 3)) === "GIF" }],
]);

export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user?.id || !isAdminRole(session.user.role)) {
    return NextResponse.json({ error: "Silakan masuk sebagai administrator untuk mengunggah foto." }, { status: 401 });
  }

  let file: FormDataEntryValue | null;
  try {
    file = (await request.formData()).get("file");
  } catch {
    return NextResponse.json({ error: "Berkas foto tidak dapat dibaca." }, { status: 400 });
  }
  if (!(file instanceof File)) return NextResponse.json({ error: "Pilih satu berkas foto terlebih dahulu." }, { status: 400 });
  if (file.size === 0 || file.size > MAX_FILE_SIZE) return NextResponse.json({ error: "Ukuran foto harus lebih dari 0 dan maksimal 12 MB." }, { status: 413 });

  const format = imageTypes.get(file.type);
  if (!format) return NextResponse.json({ error: "Format foto harus JPG, PNG, WebP, atau GIF." }, { status: 415 });
  const bytes = new Uint8Array(await file.arrayBuffer());
  if (!format.signature(bytes)) return NextResponse.json({ error: "Isi berkas tidak sesuai dengan format foto." }, { status: 415 });

  const filename = `${randomUUID()}.${format.extension}`;
  const directory = path.join(process.cwd(), "public", "uploads");
  try {
    await mkdir(directory, { recursive: true });
    await writeFile(path.join(directory, filename), bytes, { flag: "wx" });
  } catch {
    return NextResponse.json({ error: "Foto belum dapat disimpan. Periksa izin penyimpanan server." }, { status: 500 });
  }

  return NextResponse.json({ path: `/uploads/${filename}` }, { status: 201 });
}
