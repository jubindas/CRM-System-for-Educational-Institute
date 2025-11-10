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

export default function AddSubAdmin() {

  const [open, setOpen] = useState(false);

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  
  const [password, setPassword] = useState("");

  const handleSave = () => {
    const newSubAdmin = {
      id: crypto.randomUUID(),
      name,
      email,
      password,
    };

    console.log("Sub Admin Created (UI Only):", newSubAdmin);

    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-zinc-800 text-white hover:bg-zinc-700">
          Add Sub-Admin
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[450px] bg-white text-zinc-900 border border-zinc-200 shadow-md rounded-xl p-6">
        <DialogHeader>
          <DialogTitle>Add Sub-Admin</DialogTitle>
        </DialogHeader>

        <div className="grid gap-4 py-4">

          <div className="grid gap-2">
            <Label className="text-zinc-700">Name</Label>
            <Input
              placeholder="Enter Sub-Admin Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
            <Input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-zinc-50 text-zinc-900 border border-zinc-300"
            />
          </div>

        </div>

        <div className="flex justify-end gap-2 mt-4">
          <Button
            className="bg-zinc-800 text-white hover:bg-zinc-700"
            onClick={handleSave}
          >
            Add Sub-Admin
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
