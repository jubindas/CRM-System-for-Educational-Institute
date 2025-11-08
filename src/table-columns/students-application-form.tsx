import type { ColumnDef } from "@tanstack/react-table";
import type { StudentsApplicationForm } from "@/table-types/students-application";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const studentsApplicationFormColumns: ColumnDef<StudentsApplicationForm>[] = [
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
    accessorKey: "course",
    header: "Course",
  },
  {
    accessorKey: "joinedDate",
    header: "Joined Date",
    cell: ({ row }) => {
      const date = row.getValue("joinedDate") as string;
      return <span>{new Date(date).toLocaleDateString()}</span>;
    },
  },
  {
    accessorKey: "fees",
    header: "Fees (₹)",
    cell: ({ row }) => (
      <span className="font-medium text-green-600">
        ₹{row.getValue("fees")}
      </span>
    ),
  },
{
  accessorKey: "status",
  header: "STATUS",
  cell: ({ row }) => {
    const currentStatus = row.getValue("status") as StudentsApplicationForm["status"];

    return (
      <Select
        defaultValue={currentStatus}
        onValueChange={(value) => {
          console.log("Status changed:", value);

          row.original.status = value as StudentsApplicationForm["status"];
        }}
      >
        <SelectTrigger className="w-[140px] border text-sm bg-amber-200">
          <SelectValue />
        </SelectTrigger>

        <SelectContent className="bg-amber-200">
          <SelectItem value="Pending">Pending</SelectItem>
          <SelectItem value="Approved">Approved</SelectItem>
          <SelectItem value="Rejected">Rejected</SelectItem>
        </SelectContent>
      </Select>
    );
  },
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
