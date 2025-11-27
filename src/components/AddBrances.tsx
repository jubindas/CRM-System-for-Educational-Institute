import { useEffect, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Eye, EyeOff } from "lucide-react";

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

import { getAllDist } from "@/service/apiDistrict";

import type { Districts } from "@/table-types/district";

import { useMutation, useQuery } from "@tanstack/react-query";

import { addBranch } from "@/service/apiBranch";

type BranchData = {
  district_id: number;
  name: string;
  email: string;
  password: string;
  remark: string;
};

type Props = {
  mode: "create" | "edit";
  trigger?: React.ReactNode;
  rowData?: BranchData;
};

export default function AddBrances({ mode, trigger, rowData }: Props) {
  const [open, setOpen] = useState(false);

  const [district, setDistrict] = useState("");

  const [branceName, setBranceName] = useState("");

  const [email, setEmail] = useState("");

  const [remarks, setRemarks] = useState("");

  const [off, setOff] = useState(false);

  const { data: districtList } = useQuery({
    queryKey: ["districts"],
    queryFn: getAllDist,
  });

  function generateUniqueEmail(branchName: string, domain = "email.com") {
    let cleaned = branchName.toLowerCase();

    cleaned = cleaned.replace(/[^a-z0-9]/g, "");

    const randomNum = Math.floor(1000 + Math.random() * 9000);

    return `${cleaned}${randomNum}@${domain}`;
  }

  useEffect(() => {
    if (mode === "edit" && rowData) {
      setDistrict(String(rowData.district_id));
      setBranceName(rowData.name);
      setEmail(rowData.email);
      setRemarks(rowData.remark);
    }
  }, [mode, rowData]);

  const createMutateion = useMutation({
    mutationFn: (data: BranchData) => addBranch(data),
    onSuccess: () => {
      console.log("Branch added successfully");
    },
    onError: () => {
      console.log("Error adding branch");
    },
  });

  const handleSave = () => {
    const createPaylode = {
      district_id: Number(district),
      name: branceName,
      email: generateUniqueEmail(email),
      password: "password",
      remark: remarks,
    };
    if (mode === "create") {
      createMutateion.mutate(createPaylode);
    }
    console.log("Branch saved (UI only):", {
      district,
      branceName,
      email: generateUniqueEmail(email),
      password: "password",
      remarks,
    });

    setDistrict("");
    setBranceName("");
    setEmail("");
    setRemarks("");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button className="bg-zinc-800 text-white hover:bg-zinc-700">
            {mode === "create" ? "Add Branch" : "Edit Branch"}
          </Button>
        )}
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
                  {districtList.map((dist: Districts) => (
                    <SelectItem key={dist.id} value={dist.id}>
                      {dist.district}
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

            <div className="relative">
              <Input
                type={off ? "password" : "text"}
                placeholder="Enter Password"
                value="password"
                readOnly
                className="bg-zinc-50 text-zinc-900 border border-zinc-300 pr-10"
              />

              <button
                type="button"
                onClick={() => setOff(!off)}
                className="absolute inset-y-0 right-3 flex items-center text-zinc-600"
              >
                {off ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
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
