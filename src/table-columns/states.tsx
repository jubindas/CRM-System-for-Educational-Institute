import type { ColumnDef } from "@tanstack/react-table";

import type { States } from "@/table-types/states";

import AddStateDialog from "@/components/AddStateDialog";

export const statesColumns: ColumnDef<States>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => <span>{row.original.id}</span>,
  },

  {
    accessorKey: "state",
    header: "State",
    cell: ({ row }) => <span>{row.original.state}</span>,
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const district = row.original;

      return (
        <div className="flex gap-2 ">
          <AddStateDialog
            mode="edit"
            trigger={
              <button
                onClick={() => {}}
                className="px-3 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Edit
              </button>
            }
          />

          <button
            onClick={() => console.log("Delete:", district.id)}
            className="px-3 py-1 text-xs bg-red-600 text-white rounded hover:bg-red-700"
          >
            Delete
          </button>

          <button
            onClick={() => {}}
            className="px-3 py-1 text-xs bg-green-600 text-white rounded hover:bg-green-700"
          >
            Active
          </button>
        </div>
      );
    },
  },
];
