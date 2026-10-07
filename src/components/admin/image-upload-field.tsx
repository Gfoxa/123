"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const MAX_FILE_SIZE = 12 * 1024 * 1024;
const ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif"];

export function ImageUploadField({ name, label, value = "", required = false }: { name: string; label: string; value?: string; required?: boolean }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [imagePath, setImagePath] = useState(value);
  const [preview, setPreview] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => () => { if (preview) URL.revokeObjectURL(preview); }, [preview]);

  async function upload(file?: File) {
    if (!file) return;
    setMessage("");
    if (!ACCEPTED_TYPES.includes(file.type)) {
      setMessage("Gunakan foto JPG, PNG, WebP, atau GIF.");
      return;
    }
    if (file.size > MAX_FILE_SIZE) {
      setMessage("Ukuran foto maksimal 12 MB.");
      return;
    }

    setIsUploading(true);
    try {
      const formData = new FormData();
      formData.set("file", file);
      const response = await fetch("/api/admin/upload", { method: "POST", body: formData });
      const result: { path?: string; error?: string } = await response.json();
      if (!response.ok || !result.path) throw new Error(result.error || "Foto gagal diunggah.");
      setImagePath(result.path);
      setPreview((current) => { if (current) URL.revokeObjectURL(current); return URL.createObjectURL(file); });
      setMessage("Foto berhasil diunggah.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Foto gagal diunggah.");
    } finally {
      setIsUploading(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  }

  return <div className="admin-image-field">
    <input type="hidden" name={name} value={imagePath} />
    <div className={`admin-upload-zone${isDragging ? " is-dragging" : ""}`} onDragOver={(event) => { event.preventDefault(); setIsDragging(true); }} onDragLeave={(event) => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setIsDragging(false); }} onDrop={(event) => { event.preventDefault(); setIsDragging(false); void upload(event.dataTransfer.files[0]); }}>
      {preview || imagePath ? <Image className="admin-upload-preview" src={preview || imagePath} alt="Pratinjau foto yang dipilih" width={180} height={120} unoptimized /> : <span className="admin-upload-icon" aria-hidden="true">↥</span>}
      <strong>{isUploading ? "Mengunggah foto…" : "Letakkan foto di sini"}</strong>
      <span>JPG, PNG, WebP, atau GIF · maksimal 12 MB</span>
      <button type="button" className="admin-upload-picker" onClick={() => inputRef.current?.click()} disabled={isUploading}>{imagePath ? "Ganti foto" : "Pilih foto"}</button>
      <input ref={inputRef} className="admin-upload-file-input" type="file" accept="image/jpeg,image/png,image/webp,image/gif" aria-label={`Pilih ${label.toLowerCase()}`} onChange={(event) => void upload(event.currentTarget.files?.[0])} />
    </div>
    <div className="admin-cloud-imports" aria-label="Impor foto dari penyimpanan cloud">
      <span>atau impor dari</span>
      <button type="button" disabled title="Integrasi Google Drive belum dikonfigurasi">Google Drive</button>
      <button type="button" disabled title="Integrasi Dropbox belum dikonfigurasi">Dropbox</button>
    </div>
    <p className="admin-cloud-note">Impor cloud perlu koneksi akun Google Drive atau Dropbox.</p>
    <label className="admin-image-path">Path foto<input type="text" value={imagePath} required={required} onChange={(event) => { setImagePath(event.target.value); setPreview(""); }} placeholder="Path foto akan muncul setelah diunggah" /></label>
    {message && <p className="admin-upload-message" role="status">{message}</p>}
  </div>;
}
