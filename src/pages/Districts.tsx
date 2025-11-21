import AddDistricts from "@/components/AddDistricts";

import { DataTable } from "@/components/data-table";

import { districtColumns } from "@/table-columns/districts";

import { districtData } from "@/table-data/districts";

export default function Districts() {
  return (
    <div className="p-6 bg-zinc-100 min-h-screen mt-8">
      <div className="flex flex-wrap justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-zinc-800 tracking-tight">
          Districts
        </h1>
        <AddDistricts mode="create" />
      </div>

      <DataTable
        columns={districtColumns}
        data={districtData}
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
