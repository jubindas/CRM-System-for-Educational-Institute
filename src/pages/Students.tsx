import { DataTable } from "@/components/data-table";
import { studentsColumns } from "@/table-columns/students";
import { studentsData } from "@/table-data/students";

export default function Students() {

    return <div className="p-6 bg-zinc-100 min-h-screen mt-8">
    <div className="flex flex-wrap justify-between items-center mb-6">
      <h1 className="text-2xl font-semibold text-zinc-800 tracking-tight">
        Brances
      </h1>
    </div>

    <DataTable
      columns={studentsColumns}
      data={studentsData}
      enablePagination={true}
      filterOptions={{
        enableFilter: true,
        filterPlaceholder: "Search Schools...",
        filterCol: "center_name",
      }}
    />
  </div>;
}
