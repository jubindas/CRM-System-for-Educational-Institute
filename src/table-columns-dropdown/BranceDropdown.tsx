/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

import { Button } from "@/components/ui/button";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import { MoreHorizontal, Edit, Trash2 } from "lucide-react";
import AddBrances from "@/components/AddBrances";

export default function BranceDropdown({ rowData }: any) {


  const [openDialog, setOpenDialog] = useState(false);

  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-zinc-100 rounded-full"
          >
            <MoreHorizontal className="h-5 w-5 text-zinc-700" />
          </Button>
        </PopoverTrigger>

        <PopoverContent
          align="end"
          className="w-48 p-2 bg-white border border-zinc-200 shadow-lg rounded-md"
        >
          <div className="flex flex-col space-y-1">
            <AddBrances
              {...({
                mode: "edit",
                trigger: (
                  <Button
                    variant="ghost"
                    className="justify-start text-left text-sm hover:bg-zinc-100 w-full text-zinc-700"
                  >
                    <Edit className="h-4 w-4 mr-2 text-zinc-700" />
                    Edit
                  </Button>
                ),
                data: { ...rowData, id: Number(rowData.id) },
              } as any)}
            />

            <Button
              variant="ghost"
              className="justify-start text-left text-sm hover:bg-red-100 text-red-600 w-full"
              onClick={() => setOpenDialog(true)}
            >
              <Trash2 className="h-4 w-4 mr-2 text-red-600" />
              Delete
            </Button>
          </div>
        </PopoverContent>
      </Popover>

      <AlertDialog open={openDialog} onOpenChange={setOpenDialog}>
        <AlertDialogContent className="bg-white">
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you sure you want to delete this branch?
            </AlertDialogTitle>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>

            <AlertDialogAction className="bg-red-500 text-white">
              Confirm
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
