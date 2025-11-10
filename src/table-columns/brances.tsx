import type { ColumnDef } from "@tanstack/react-table";

import type { Brances } from "@/table-types/brances";

import BranceDropdown from "@/table-columns-dropdown/BranceDropdown";

export const branchColumns: ColumnDef<Brances>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "districtId",
    header: "District",
  },
  {
    accessorKey: "branceName",
    header: "Branch Name",
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
    accessorKey: "remarks",
    header: "Remarks",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => <BranceDropdown rowData={row.original}/>
  },
];
