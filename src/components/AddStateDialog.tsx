import { useEffect, useState } from "react";

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

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { addStates, updateState } from "@/service/apiState";

import { toast } from "sonner";

type StatesData = {
  id: number;
  state: string;
};

type Props = {
  mode: "create" | "edit";
  stateData?: StatesData;
  trigger?: React.ReactNode;
};

export default function AddStateDialog({ mode, stateData, trigger }: Props) {
  const [open, setOpen] = useState(false);

  const [stateName, setStateName] = useState<string | undefined>("");

  const queryClient = useQueryClient();

  useEffect(() => {
    if (mode === "edit" && stateData) {
      setStateName(stateData?.state);
    } else {
      setStateName("");
    }
  }, [stateData, mode, open]);

  const mutation = useMutation({
    mutationFn: (data: { name: string }) => addStates(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["states"] });
      console.log("State added successfully");
      toast("State Created");
      setOpen(false);
      setStateName("");
    },
    onError: (err) => {
      toast(`something went wrong ! ${err.message}`);
      console.error("Error adding state:", err);
    },
  });

  const updateMutation = useMutation({
    mutationFn: (data: { id: number; name: string }) =>
      updateState({ id: data.id, name: data.name }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["states"] });
      toast("State Updated");
      setOpen(false);
      setStateName("");
    },
    onError: (err) => {
      console.log("the err is", err);
    },
  });

  const handleSave = () => {
    if (!stateName || !stateName.trim()) {
      alert("State name is required");
      return;
    }

    const paylod = {
      name: stateName,
    };

    const updatePaylod = {
      id: Number(stateData?.id),
      name: stateName,
    };

    if (mode === "create") {
      mutation.mutate(paylod);
    } else {
      updateMutation.mutate(updatePaylod);
    }
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
            disabled={mutation.isPending || updateMutation.isPending}
          >
            {mode === "create"
              ? mutation.isPending
                ? "Saving..."
                : "Save"
              : updateMutation.isPending
              ? "Updating..."
              : "Update"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
