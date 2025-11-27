import AddBrances from "@/components/AddBrances";

import { DataTable } from "@/components/data-table";
import { getAllBranches } from "@/service/apiBranch";

import { branchColumns } from "@/table-columns/brances";

import { useQuery } from "@tanstack/react-query";

export default function Brances() {
  const { data: brancesData, isLoading } = useQuery({
    queryKey: ["branches"],
    queryFn: getAllBranches,
  });

  if (isLoading) return <h1>loading</h1>;

  return (
    <div className="p-6 bg-zinc-100 min-h-screen mt-8">
      <div className="flex flex-wrap justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-zinc-800 tracking-tight">
          Brances
        </h1>
        <AddBrances mode="create" />
      </div>

      {brancesData && (
        <DataTable
          columns={branchColumns}
          data={brancesData}
          enablePagination={true}
          filterOptions={{
            enableFilter: true,
            filterPlaceholder: "Search Schools...",
            filterCol: "branceName",
          }}
        />
      )}
    </div>
  );
}
