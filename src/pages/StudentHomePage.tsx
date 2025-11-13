import AddStudentApplication from "@/components/AddStudentApplication";

import { useState } from "react";

import { Bell, Clock } from "lucide-react";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";

export default function StudentHomePage() {
  const [search, setSearch] = useState("");

  const application = {
    notifications: [
      {
        id: 1,
        message: "Your application has been submitted successfully.",
        time: "2 hours ago",
      },
      {
        id: 2,
        message: "Your counselling date has been scheduled.",
        time: "1 day ago",
      },
      {
        id: 3,
        message: "Your documents are under verification.",
        time: "3 days ago",
      },
    ],
  };

  const branches = [
    { id: 1, name: "Computer Science Engineering", short: "CSE" },
    { id: 2, name: "Mechanical Engineering", short: "ME" },
    { id: 3, name: "Electrical Engineering", short: "EE" },
    { id: 4, name: "Civil Engineering", short: "CE" },
    { id: 5, name: "Electronics & Communication", short: "ECE" },
    { id: 6, name: "Information Technology", short: "IT" },
  ];

  const filteredBranches = branches.filter((b) =>
    b.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative max-w-5xl mx-auto px-4 py-10 font-sans">
      <div className="absolute top-6 right-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="p-2 h-10 w-10 rounded-full transition"
            >
              <Bell className="size-7 text-gray-700" />
            </Button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="w-[380px] sm:w-[420px] bg-white"
          >
            <SheetHeader>
              <SheetTitle className="text-lg">Notifications</SheetTitle>
              <SheetDescription>
                All updates regarding your enquiry & application.
              </SheetDescription>
            </SheetHeader>

            <div className="mt-6 space-y-4">
              {application.notifications.map((note) => (
                <div
                  key={note.id}
                  className="p-4 w-80 ml-4 rounded-xl bg-white shadow flex items-start gap-3 border border-gray-200"
                >
                  <Clock className="h-5 w-5 text-indigo-500 mt-1" />
                  <div>
                    <p className="text-gray-800 font-medium">{note.message}</p>
                    <p className="text-xs text-gray-500 mt-1">{note.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Student Portal</h1>
        <p className="text-gray-600 mt-2">
          Search your branch and submit your application
        </p>
      </div>

      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search branches…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-xl px-4 py-3 rounded-xl border border-gray-300 
                     text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredBranches.length === 0 && (
          <p className="text-gray-500 text-center col-span-full">
            No branches found.
          </p>
        )}

        {filteredBranches.map((branch) => (
          <div
            key={branch.id}
            className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-lg transition"
          >
            <h3 className="text-3xl font-bold text-zinc-600 mb-2">
              {branch.short}
            </h3>
            <p className="text-gray-700 mb-5">{branch.name}</p>

            <AddStudentApplication />
          </div>
        ))}
      </div>
    </div>
  );
}
