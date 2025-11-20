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
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function AddBrances() {
  const [open, setOpen] = useState(false);

  const [district, setDistrict] = useState("");

  const [branceName, setBranceName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [remarks, setRemarks] = useState("");

  const [subAdmin, setSubAdmin] = useState("");

  const districtList = [
    "Guwahati",
    "Jorhat",
    "Dibrugarh",
    "Tinsukia",
    "Silchar",
    "Tezpur",
    "Nagaon",
    "Sivasagar",
  ];

  const subAdminList = [
    "jubin das",
    "raja babu",
    "riddhi sahu",
    "wahid rohman",
  ];

  const handleSave = () => {
    console.log("Branch saved (UI only):", {
      district,
      branceName,
      email,
      password,
      remarks,
      subAdmin,
    });

    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-zinc-800 text-white hover:bg-zinc-700">
          Add Branch
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[500px] bg-white text-zinc-900 border border-zinc-200 shadow-md rounded-xl p-6">
        <DialogHeader>
          <DialogTitle>Add Branch</DialogTitle>
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
            <Label className="text-zinc-700">Branch Name</Label>
            <Input
              placeholder="Enter Branch Name"
              value={branceName}
              onChange={(e) => setBranceName(e.target.value)}
              className="bg-zinc-50 text-zinc-900 border border-zinc-300"
            />
          </div>

          <div className="grid gap-2">
            <Label className="text-zinc-700">Assign Sub Admin</Label>
            <Select onValueChange={setSubAdmin}>
              <SelectTrigger className="w-full border border-zinc-300 bg-zinc-50">
                <SelectValue placeholder="Select District" />
              </SelectTrigger>

              <SelectContent className="bg-white">
                <SelectGroup>
                  {subAdminList.map((s) => (
                    <SelectItem key={s} value={s}>
                      {s}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
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
            <Label className="text-zinc-700">Password</Label>
            <Input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-zinc-50 text-zinc-900 border border-zinc-300"
            />
          </div>

          <div className="grid gap-2">
            <Label className="text-zinc-700">Remarks</Label>
            <Input
              placeholder="Enter Remarks"
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
              className="bg-zinc-50 text-zinc-900 border border-zinc-300"
            />
          </div>
        </div>

        <div className="flex justify-end gap-2 mt-4">
          <Button
            className="bg-zinc-800 text-white hover:bg-zinc-700"
            onClick={handleSave}
          >
            Save
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
