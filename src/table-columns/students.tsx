import type { ColumnDef } from "@tanstack/react-table";
import type { Student } from "@/table-types/students";

export const studentsColumns: ColumnDef<Student>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "district",
    header: "District",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status;

      const color =
        status === "Enquiry"
          ? "bg-yellow-100 text-yellow-700"
          : status === "Registered"
          ? "bg-blue-100 text-blue-700"
          : "bg-green-100 text-green-700";

      return (
        <span
          className={`px-3 py-1 rounded-full text-sm font-semibold ${color}`}
        >
          {status}
        </span>
      );
    },
  },
  {
    accessorKey: "date",
    header: "Date",
  },
];
