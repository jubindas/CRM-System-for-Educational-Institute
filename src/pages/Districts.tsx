import AddDistricts from "@/components/AddDistricts";

import { DataTable } from "@/components/data-table";

import { getAllDist } from "@/service/apiDistrict";

import { districtColumns } from "@/table-columns/districts";

import { useQuery } from "@tanstack/react-query";

export default function Districts() {
  const { data, isLoading } = useQuery({
    queryKey: ["districts"],
    queryFn: getAllDist,
  });

  if (isLoading) return <h1>loading</h1>;

  console.log("District Data:", data);

  return (
    <div className="p-6 bg-zinc-100 min-h-screen mt-8">
      <div className="flex flex-wrap justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-zinc-800 tracking-tight">
          Districts
        </h1>
        <AddDistricts mode="create" />
      </div>

      {data && (
        <DataTable
          columns={districtColumns}
          data={data}
          enablePagination={true}
          filterOptions={{
            enableFilter: true,
            filterPlaceholder: "Search Schools...",
            filterCol: "center_name",
          }}
        />
      )}
    </div>
  );
}
