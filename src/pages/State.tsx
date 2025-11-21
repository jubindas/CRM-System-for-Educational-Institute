import AddStateDialog from "@/components/AddStateDialog";

import { DataTable } from "@/components/data-table";

import { getAllStates } from "@/service/apiState";

import { statesColumns } from "@/table-columns/states";

import { useQuery } from "@tanstack/react-query";

export default function State() {
  const { data, isLoading } = useQuery({
    queryKey: ["states"],
    queryFn: getAllStates,
  });

  if (isLoading) return <h1>loading</h1>;

  return (
    <div className="p-6 bg-zinc-100 min-h-screen mt-8">
      <div className="flex flex-wrap justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-zinc-800 tracking-tight">
          State
        </h1>
        <AddStateDialog mode="create" />
      </div>

      {data && (
        <DataTable
          columns={statesColumns}
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
