import { Link, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import {
  Home,
  MapPin,
  Building2,
  User,
  ShieldAlert,
  Users,
} from "lucide-react";
import Logout from "./Logout";

const adminItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "District", url: "/districts", icon: MapPin },
  { title: "Sub Admin", url: "/sub-admin", icon: Users },
  { title: "Brances", url: "/brances", icon: Building2 },
  { title: "Students", url: "/students", icon: User },
];

const subAdminItems = [
  { title: "Enquiry Form", url: "/enquiry-form", icon: ShieldAlert },
];

export function AppSidebar() {
  const location = useLocation();
  const users = JSON.parse(localStorage.getItem("loggedInUser") || "{}") || {
    role: null,
  };

  console.log(users.role);

  const getMenuItems = () => {
    switch (users.role) {
      case "admin":
        return adminItems;
      case "student":
        return subAdminItems;
      default:
        return [];
      // case "student":
      //   return baseItems.filter((item) => item.title !== "Block");
    }
  };

  const menuItems = getMenuItems();

  return (
    <Sidebar className="bg-zinc-900! text-white shadow-lg">
      <SidebarContent className="py-6 bg-zinc-900!">
        <div className="px-6 mb-10 flex items-center space-x-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHavAqEKhY8MRX7NntKRnkGqFTk42uJT_TuA&s"
            alt="Avatar"
            className="h-12 w-12 rounded-full border-2 border-zinc-700"
          />
          <div>
            <p className="text-sm text-zinc-400">Welcome,</p>
            <h2 className="text-lg font-bold text-white">
              {users.role === "admin"
                ? "Admin"
                : users.role === "subAdmin"
                ? "Sub-Admin"
                : "Student"}
            </h2>
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className="text-2xl font-extrabold tracking-wide text-white px-6 mb-6">
            Education
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu className="space-y-3">
              {menuItems.map((item) => {
                const isActive = location.pathname === item.url;

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link
                        to={item.url}
                        className={`flex items-center space-x-5 px-6 py-4 rounded-xl text-lg font-semibold transition-all duration-300
                          ${
                            isActive
                              ? "bg-zinc-700 text-white shadow-md scale-[1.02]"
                              : "text-white hover:bg-zinc-800"
                          }`}
                      >
                        <item.icon className="h-7 w-7 shrink-0" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <div className="px-8 mt-auto mb-2">
          <Logout />
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
