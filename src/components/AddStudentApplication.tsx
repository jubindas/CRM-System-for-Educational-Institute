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

export default function AddStudentApplication() {

  const [open, setOpen] = useState(false);

  const [district, setDistrict] = useState("");

  const [branch, setBranch] = useState("");

  const [studentName, setStudentName] = useState("");

  const [email, setEmail] = useState("");

  const [phone, setPhone] = useState("");

  const [remarks, setRemarks] = useState("");

  const districtList = ["Guwahati", "Jorhat", "Dibrugarh", "Tinsukia", "Sivasagar"];
  
  const branchList = ["Main Branch", "City Branch", "Town Branch", "Center Point"];

  const handleSave = () => {
    console.log("Student Enquiry Saved (UI Only):", {
      district,
      branch,
      studentName,
      email,
      phone,
      remarks,
    });

    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-zinc-800 text-white hover:bg-zinc-700">
          Add Enquiry
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[500px] bg-white text-zinc-900 border border-zinc-200 shadow-md rounded-xl p-6">
        <DialogHeader>
          <DialogTitle>Add Student Enquiry</DialogTitle>
        </DialogHeader>

        <div className="grid gap-4 py-4">

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
            <Label className="text-zinc-700">Student Name</Label>
            <Input
              placeholder="Enter Name"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              className="bg-zinc-50 text-zinc-900 border border-zinc-300"
            />
          </div>

          <div className="grid gap-2">
            <Label className="text-zinc-700">Email</Label>
            <Input
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            <Label className="text-zinc-700">Remarks / Message</Label>
            <Input
              placeholder="Enter Message"
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
              className="bg-zinc-50 text-zinc-900 border border-zinc-300"
            />
          </div>

        </div>

        <div className="flex justify-end gap-2 mt-4">
          <Button className="bg-zinc-800 text-white hover:bg-zinc-700" onClick={handleSave}>
            Submit
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
