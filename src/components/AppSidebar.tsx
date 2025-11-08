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

const studentsItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "Enquiry Form", url: "/enquiry-form", icon: ShieldAlert },
];

const subAdminItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "Enquiry Form", url: "/student-form-enquiry", icon: ShieldAlert },
  { title: "Brances", url: "/brances", icon: Building2 },
  { title: "Students", url: "/students", icon: User },
];
const branchItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "Enquiry Form", url: "/student-form-enquiry", icon: ShieldAlert },
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
        return studentsItems;
      case "sub-admin":
        return subAdminItems;
      case "branch":
        return branchItems;
      default:
        return [];
    }
  };

  const menuItems = getMenuItems();

  return (
    <Sidebar className="bg-zinc-900! text-white shadow-lg">
      <SidebarContent className="py-6 bg-zinc-900!">
        <div className="px-6 mb-10 flex items-center space-x-4">
          <img
            src="https://i.pinimg.com/736x/b9/e0/e3/b9e0e30ac1ec95077b7e1d0abd250e5d.jpg"
            alt="Avatar"
            className="h-12 w-12 rounded-full border-2 border-zinc-700"
          />
          <div>
            <p className="text-sm text-zinc-400">Welcome,</p>
            <h2 className="text-lg font-bold text-white">
              {users.role === "admin"
                ? "Admin"
                : users.role === "sub-admin"
                ? "Sub-Admin"
                : users.role === "branch"
                ? "Branch" 
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
