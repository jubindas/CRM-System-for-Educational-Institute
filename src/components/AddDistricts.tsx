/* eslint-disable @typescript-eslint/no-explicit-any */
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

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { addDist, updateDist } from "@/service/apiDistrict";

import { toast } from "sonner";

import { Select, SelectTrigger, SelectValue } from "@radix-ui/react-select";

import { SelectContent, SelectGroup, SelectItem } from "./ui/select";

import { getAllStates } from "@/service/apiState";

import type { States } from "@/table-types/states";

type DistrictData = {
  id: number;
  district: string;
  state: string;
};

type Props = {
  mode: "create" | "edit";
  distData?: DistrictData;
  trigger?: React.ReactNode;
};

export default function AddDistricts({ mode, distData, trigger }: Props) {
  const [open, setOpen] = useState(false);

  const [districtName, setDistrictName] = useState<string>("");

  const [stateName, setStateName] = useState<string>("");

  const queryClient = useQueryClient();

  const { data: states } = useQuery({
    queryKey: ["states"],
    queryFn: getAllStates,
  });

  // console.log("the district data is outside useEffect", distData);

  useEffect(() => {
    if (mode === "edit" && distData) {
      setDistrictName(distData.district);
      setStateName(distData.state);
    } else {
      setDistrictName("");
      setStateName("");
    }
  }, [distData, mode, open]);

  const addMutation = useMutation({
    mutationFn: (data: any) => addDist(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["districts"] });
      toast("District Created");
      setOpen(false);
      setDistrictName("");
      setStateName("");
    },
    onError: (err) => {
      toast(`Error: ${err.message}`);
    },
  });

  const updateMutation = useMutation({
    mutationFn: (data: { id: number; name: string }) => {
      const getStateIdByName = (name: string) => {
        const state = states?.find((state: States) => state.state === name);
        return state ? state.id : null;
      };

      return updateDist({
        id: data.id,
        state_id: getStateIdByName(stateName),
        name: data.name,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["districts"] });
      toast("District Updated");
      setOpen(false);
      setDistrictName("");
      setStateName("");
    },
    onError: (err) => {
      toast(`Error: ${err.message}`);
    },
  });

  const handleSave = () => {
    if (!districtName.trim()) {
      alert("District name is required");
      return;
    }

    const payload = {
      name: districtName,
      state_id: stateName,
    };

    console.log("Payload:", payload);

    const updatePayload = {
      id: Number(distData?.id),
      state_id: stateName,
      name: districtName,
    };

    console.log("Update Payload:", updatePayload);

    if (mode === "create") {
      addMutation.mutate(payload);
    } else {
      updateMutation.mutate(updatePayload);
    }
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
          <DialogTitle>
            {mode === "create" ? "Add District" : "Edit District"}
          </DialogTitle>
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
            <Label className="text-zinc-700">State</Label>

            <Select value={stateName} onValueChange={setStateName}>
              <SelectTrigger className="w-full h-10 rounded-xl border border-zinc-300 bg-zinc-50">
                <SelectValue placeholder="Select a State" />
              </SelectTrigger>

              <SelectContent className="bg-white">
                <SelectGroup>
                  {states?.map((state: States) => (
                    <SelectItem key={state.id} value={state.state}>
                      {state.state}
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
            disabled={addMutation.isPending || updateMutation.isPending}
          >
            {mode === "create"
              ? addMutation.isPending
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
