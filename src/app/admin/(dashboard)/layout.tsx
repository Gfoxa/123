import type { ReactNode } from "react";
import type { Metadata } from "next";
import { AdminNavigation } from "@/components/admin/admin-navigation";
import { requireAdmin } from "@/server/auth/require-admin";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { robots: { index: false, follow: false } };

export default async function AdminLayout({ children }: { children: ReactNode }) {
  await requireAdmin();
  return <div className="admin-shell"><AdminNavigation /><main className="admin-main">{children}</main></div>;
}
