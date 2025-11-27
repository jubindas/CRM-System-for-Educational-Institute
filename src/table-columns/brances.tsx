import type { ColumnDef } from "@tanstack/react-table";

import type { Brances } from "@/table-types/brances";

import BranceDropdown from "@/table-columns-dropdown/BranceDropdown";

export const branchColumns: ColumnDef<Brances>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "branch",
    header: "Branch Name",
  },
  {
    accessorKey: "district",
    header: "District",
  },

  {
    accessorKey: "state",
    header: "Remarks",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "password",
    header: "Password",
    cell: ({ row }) => {
      const pass = row.original.password;
      return <span>{pass}</span>;
    },
  },
  {
    accessorKey: "remark",
    header: "Remarks",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => <BranceDropdown rowData={row.original} />,
  },
];
