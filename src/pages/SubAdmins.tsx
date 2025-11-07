import { DataTable } from "@/components/data-table";

export default function SubAdmins() {
  return (
    <div className="p-6 bg-zinc-100 min-h-screen mt-8">
      <div className="flex flex-wrap justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-zinc-800 tracking-tight">
          Sub Admins
        </h1>
      </div>

      <DataTable
        columns={[]}
        data={[]}
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
