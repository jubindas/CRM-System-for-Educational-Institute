import type { ColumnDef } from "@tanstack/react-table";
import type { Districts } from "@/table-types/district";

export const districtColumns: ColumnDef<Districts>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => <span>{row.original.id}</span>,
  },
  {
    accessorKey: "name",
    header: "District Name",
    cell: ({ row }) => <span>{row.original.name}</span>,
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
        <div className="flex gap-2">
          <button
            onClick={() => console.log("Edit:", district.id)}
            className="px-3 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Edit
          </button>

          <button
            onClick={() => console.log("Delete:", district.id)}
            className="px-3 py-1 text-xs bg-red-600 text-white rounded hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      );
    },
  },
];
