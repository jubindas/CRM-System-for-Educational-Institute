import AddBrances from "@/components/AddBrances";

import { DataTable } from "@/components/data-table";

import { branchColumns } from "@/table-columns/brances";

import { branchData } from "@/table-data/brances";

export default function Brances() {
  return (
    <div className="p-6 bg-zinc-100 min-h-screen mt-8">
      <div className="flex flex-wrap justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-zinc-800 tracking-tight">
          Brances
        </h1>
        <AddBrances />
      </div>

      <DataTable
        columns={branchColumns}
        data={branchData}
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
