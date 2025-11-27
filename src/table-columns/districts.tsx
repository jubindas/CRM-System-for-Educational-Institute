import type { ColumnDef } from "@tanstack/react-table";

import type { Districts } from "@/table-types/district";

import ActionDistDropdown from "@/table-columns-dropdown/ActionDistDropdown";

export const districtColumns: ColumnDef<Districts>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => <span>{row.original.id}</span>,
  },
  {
    accessorKey: "district",
    header: "District Name",
    cell: ({ row }) => <span>{row.original.district}</span>,
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
      return <ActionDistDropdown rowData={row.original} />;
    },
  },
];
