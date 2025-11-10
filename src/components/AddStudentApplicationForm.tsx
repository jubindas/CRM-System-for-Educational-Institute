import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Label } from "@/components/ui/label";

import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function AddStudentApplicationForm() {

  const [open, setOpen] = useState(false);

  const [name, setName] = useState("");

  const [phone, setPhone] = useState("");

  const [course, setCourse] = useState("");

  const [joinedDate, setJoinedDate] = useState("");

  const [fees, setFees] = useState("");

  const courseList = [
    "Full Stack Development",
    "Data Science",
    "UI/UX Design",
    "Digital Marketing",
    "Web Development",
  ];

  const handleSave = () => {
    const data = {
      id: crypto.randomUUID(),
      name,
      phone,
      course,
      joinedDate,
      fees,
    };

    console.log("Student Application Saved (UI Only):", data);
    
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-zinc-800 text-white hover:bg-zinc-700">
          Add Application
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[500px] bg-white text-zinc-900 border border-zinc-200 shadow-md rounded-xl p-6">
        <DialogHeader>
          <DialogTitle>Add Student Application</DialogTitle>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label className="text-zinc-700">Student Name</Label>
            <Input
              placeholder="Enter Student Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-zinc-50 text-zinc-900 border border-zinc-300"
            />
          </div>

          <div className="grid gap-2">
            <Label className="text-zinc-700">Phone Number</Label>
            <Input
              placeholder="Enter Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="bg-zinc-50 text-zinc-900 border border-zinc-300"
            />
          </div>

          <div className="grid gap-2">
            <Label className="text-zinc-700">Course</Label>
            <Select onValueChange={setCourse}>
              <SelectTrigger className="w-full border border-zinc-300 bg-zinc-50">
                <SelectValue placeholder="Select Course" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectGroup>
                  <SelectLabel>Courses</SelectLabel>
                  {courseList.map((c) => (
                    <SelectItem key={c} value={c}>
                      {c}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label className="text-zinc-700">Joined Date</Label>
            <Input
              type="date"
              value={joinedDate}
              onChange={(e) => setJoinedDate(e.target.value)}
              className="bg-zinc-50 text-zinc-900 border border-zinc-300"
            />
          </div>

          <div className="grid gap-2">
            <Label className="text-zinc-700">Fees (₹)</Label>
            <Input
              placeholder="Enter Fees Amount"
              value={fees}
              onChange={(e) => setFees(e.target.value)}
              className="bg-zinc-50 text-zinc-900 border border-zinc-300"
            />
          </div>
        </div>

        <div className="flex justify-end gap-2 mt-4">
          <Button
            className="bg-zinc-800 text-white hover:bg-zinc-700"
            onClick={handleSave}
          >
            Submit
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
