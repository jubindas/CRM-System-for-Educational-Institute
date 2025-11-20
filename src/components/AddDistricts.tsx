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

type Props = {
  mode: "create" | "edit";
  trigger?: React.ReactNode;
};

export default function AddDistricts({ mode, trigger }: Props) {
  const [open, setOpen] = useState(false);

  const [districtName, setDistrictName] = useState("");

  const [stateName, setStateName] = useState("");

  const handleSave = () => {
    console.log("District saved (UI only):", {
      districtName,
      stateName,
    });

    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button className="bg-zinc-800 text-white hover:bg-zinc-700">
            {mode === "create" ? "Add District" : "Edit District"}
          </Button>
        )}
      </DialogTrigger>

      <DialogContent className="sm:max-w-[500px] bg-white text-zinc-900 border border-zinc-200 shadow-md rounded-xl p-6">
        <DialogHeader>
          <DialogTitle>Add District</DialogTitle>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="districtName" className="text-zinc-700">
              District Name
            </Label>
            <Input
              id="districtName"
              placeholder="Enter District Name"
              value={districtName}
              onChange={(e) => setDistrictName(e.target.value)}
              className="bg-zinc-50 text-zinc-900 border border-zinc-300 placeholder:text-zinc-400"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="stateName" className="text-zinc-700">
              State
            </Label>
            <Input
              id="stateName"
              placeholder="Enter State"
              value={stateName}
              onChange={(e) => setStateName(e.target.value)}
              className="bg-zinc-50 text-zinc-900 border border-zinc-300 placeholder:text-zinc-400"
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
