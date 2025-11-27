import type { ColumnDef } from "@tanstack/react-table";
import type { States } from "@/table-types/states";

import ActionStateDropdown from "@/table-columns-dropdown/ActionStateDropdown";

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
    accessorKey: "is_active",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.is_active;
      return status === false ? (
        <span className="bg-red-500 rounded-2xl px-2 py-1 text-white text-xs">
          deactive
        </span>
      ) : (
        <span className="bg-green-500 rounded-2xl px-2 py-1 text-white text-xs">
          active
        </span>
      );
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      return <ActionStateDropdown rowData={row.original} />;
    },
  },
];
