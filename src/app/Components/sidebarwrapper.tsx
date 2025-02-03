"use client";

import { usePathname } from "next/navigation";
import MiniDrawer from "./sidebar";

export default function SidebarWrapper() {
  const pathname = usePathname();
  const showSidebar = !["/"].includes(pathname); // ✅ Sidebar hidden on login/register

  return showSidebar ? <MiniDrawer /> : null;
}
