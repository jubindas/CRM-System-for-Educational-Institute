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

import { useMutation } from "@tanstack/react-query";

import { addStates } from "@/service/apiState";

type Props = {
  mode: "create" | "edit";
  trigger?: React.ReactNode;
};

export default function AddStateDialog({ mode, trigger }: Props) {
  const [open, setOpen] = useState(false);
  const [stateName, setStateName] = useState<string>("");

  const mutation = useMutation({
    mutationFn: (data: any) => addStates(data),
    onSuccess: () => {
      console.log("State added successfully");
      setOpen(false);
      setStateName("");
    },
    onError: (err) => {
      console.error("Error adding state:", err);
    },
  });

  const handleSave = () => {
    if (!stateName.trim()) {
      alert("State name is required");
      return;
    }

    const paylod = {
      name: stateName,
    };

    mutation.mutate(paylod);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button className="bg-zinc-800 text-white hover:bg-zinc-700">
            {mode === "create" ? "Add State" : "Edit State"}
          </Button>
        )}
      </DialogTrigger>

      <DialogContent className="sm:max-w-[500px] bg-white text-zinc-900 border border-zinc-200 shadow-md rounded-xl p-6">
        <DialogHeader>
          <DialogTitle>
            {mode === "create" ? "Add State" : "Edit State"}
          </DialogTitle>
        </DialogHeader>

        <div className="grid gap-4 py-4">
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
            disabled={mutation.isPending}
          >
            {mutation.isPending ? "Saving..." : "Save"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
