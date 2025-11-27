import { SidebarProvider } from "@/components/ui/sidebar";

import { Toaster } from "@/components/ui/sonner";

import { AppSidebar } from "./AppSidebar";

import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";

export default function RootLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full bg-zinc-100">
        <Toaster position="top-center" richColors />
        <Navbar />
        <Outlet />
      </main>
    </SidebarProvider>
  );
}
