/* eslint-disable @typescript-eslint/no-explicit-any */
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

type Props = {
  mode: "create" | "edit";
  trigger?: React.ReactNode;
};

export default function AddStudentDialog({ mode, trigger }: Props) {
  const [open, setOpen] = useState(false);

  const [name, setName] = useState("");

  const [phone, setPhone] = useState("");

  const [district, setDistrict] = useState("");

  const [branch, setBranch] = useState("");

  const [status, setStatus] = useState<
    "Enquiry" | "Registered" | "Converted" | ""
  >("");

  const districtList = [
    "Guwahati",
    "Jorhat",
    "Dibrugarh",
    "Tinsukia",
    "Sivasagar",
  ];
  const branchList = [
    "Main Branch",
    "City Branch",
    "Town Branch",
    "Center Point",
  ];
  const statusList = ["Enquiry", "Registered", "Converted"];

  const handleSave = () => {
    const newStudent = {
      id: Math.floor(Math.random() * 10000),
      name,
      phone,
      district,
      branch,
      status,
    };

    console.log("Student Saved :", newStudent);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button className="bg-zinc-800 text-white hover:bg-zinc-700">
            {mode === "create" ? "Add Student" : "Edit Student"}
          </Button>
        )}
      </DialogTrigger>

      <DialogContent className="sm:max-w-[500px] bg-white text-zinc-900 border border-zinc-200 shadow-md rounded-xl p-6">
        <DialogHeader>
          <DialogTitle>Add Student Information</DialogTitle>
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
            <Label className="text-zinc-700">Phone</Label>
            <Input
              placeholder="Enter Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="bg-zinc-50 text-zinc-900 border border-zinc-300"
            />
          </div>

          <div className="grid gap-2">
            <Label className="text-zinc-700">District</Label>
            <Select onValueChange={setDistrict}>
              <SelectTrigger className="w-full border border-zinc-300 bg-zinc-50">
                <SelectValue placeholder="Select District" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectGroup>
                  <SelectLabel>Districts</SelectLabel>
                  {districtList.map((dist) => (
                    <SelectItem key={dist} value={dist}>
                      {dist}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label className="text-zinc-700">Branch</Label>
            <Select onValueChange={setBranch}>
              <SelectTrigger className="w-full border border-zinc-300 bg-zinc-50">
                <SelectValue placeholder="Select Branch" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectGroup>
                  <SelectLabel>Branches</SelectLabel>
                  {branchList.map((b) => (
                    <SelectItem key={b} value={b}>
                      {b}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label className="text-zinc-700">Status</Label>
            <Select onValueChange={(value) => setStatus(value as any)}>
              <SelectTrigger className="w-full border border-zinc-300 bg-zinc-50">
                <SelectValue placeholder="Select Status" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectGroup>
                  <SelectLabel>Statuses</SelectLabel>
                  {statusList.map((s) => (
                    <SelectItem key={s} value={s}>
                      {s}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
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
