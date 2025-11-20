import type { ColumnDef } from "@tanstack/react-table";

import type { Student } from "@/table-types/students";
import AddStudentDialog from "@/components/AddStudentDialog";

export const studentsColumns: ColumnDef<Student>[] = [
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
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "district",
    header: "District",
  },
  {
    accessorKey: "branch",
    header: "Branch",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as Student["status"];
      const colors: Record<Student["status"], string> = {
        Enquiry: "bg-yellow-100 text-yellow-800",
        Registered: "bg-blue-100 text-blue-800",
        Converted: "bg-green-100 text-green-800",
      };

      return (
        <span
          className={`px-2 py-1 text-xs rounded-md font-medium ${colors[status]}`}
        >
          {status}
        </span>
      );
    },
  },

  {
    id: "actions",
    header: "Actions",
    cell: () => (
      <div className="flex gap-2">
        <AddStudentDialog
          mode="edit"
          trigger={
            <button className="px-2 py-1 bg-blue-500 text-white rounded">
              Edit
            </button>
          }
        />

        <button className="px-2 py-1 bg-red-500 text-white rounded">
          Delete
        </button>
      </div>
    ),
  },
];
