import type { ColumnDef } from "@tanstack/react-table";
import type { SubAdmin } from "@/table-types/sub-admins";

export const subAdminColumns: ColumnDef<SubAdmin>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <span className="font-semibold text-gray-800">
        {row.getValue("name")}
      </span>
    ),
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => (
      <span className="text-blue-600">{row.getValue("email")}</span>
    ),
  },
  {
    accessorKey: "password",
    header: "Password",
    cell: ({ row }) => (
      <span className="text-gray-400 italic">{row.getValue("password")}</span>
    ),
  },
  {
    id: "actions",
    header: "Actions",
    cell: () => (
      <div className="flex gap-2">
        <button className="px-2 py-1 bg-blue-500 text-white rounded">
          Edit
        </button>
        <button className="px-2 py-1 bg-red-500 text-white rounded">
          Delete
        </button>
      </div>
    ),
  },
];
