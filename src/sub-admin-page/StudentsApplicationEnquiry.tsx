import AddStudentApplicationForm from "@/components/AddStudentApplicationForm";
import { DataTable } from "@/components/data-table";
import { studentsApplicationFormColumns } from "@/table-columns/students-application-form";
import { studentsApplications } from "@/table-data/students-application-form";

export default function StudentsApplicationEnquiry() {
  return (
    <div className="p-6 bg-zinc-100 min-h-screen mt-8">
      <div className="flex flex-wrap justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-zinc-800 tracking-tight">
          Brances
        </h1>
        <AddStudentApplicationForm />
      </div>

      <DataTable
        columns={studentsApplicationFormColumns}
        data={studentsApplications}
        enablePagination={true}
        filterOptions={{
          enableFilter: true,
          filterPlaceholder: "Search Schools...",
          filterCol: "center_name",
        }}
      />
    </div>
  );
}
