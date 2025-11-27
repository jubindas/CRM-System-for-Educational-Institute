import { useMutation, useQueryClient } from "@tanstack/react-query";

import { togggleDist } from "@/service/apiDistrict";

import AddDistDialog from "@/components/AddDistricts";

import type { Districts } from "@/table-types/district";

import { toast } from "sonner";

type ActionsCellProps = {
  rowData: Districts;
};

export default function ActionDistDropdown({ rowData }: ActionsCellProps) {
  const queryClient = useQueryClient();

  console.log("the row data in action dropdown", rowData);

  const mutation = useMutation({
    mutationFn: ({ id, status }: { id: number; status: boolean }) =>
      togggleDist(id, status),
    onSuccess: () => {
      toast("deactivated");
      queryClient.invalidateQueries({ queryKey: ["districts"] });
    },
    onError: (err) => {
      console.error("Toggle failed:", err);
    },
  });

  const handleToggle = () => {
    mutation.mutate({
      id: Number(rowData.id),
      status: rowData.is_active,
    });
  };

  return (
    <div className="flex gap-2">
      <AddDistDialog
        mode="edit"
        distData={{ ...rowData, id: Number(rowData.id) }}
        trigger={
          <button className="px-3 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700">
            Edit
          </button>
        }
      />

      <button
        onClick={handleToggle}
        disabled={mutation.isPending}
        className="px-3 py-1 text-xs bg-red-600 text-white rounded hover:bg-red-700 disabled:opacity-60"
      >
        {rowData.is_active ? "Deactivate" : "Activate"}
      </button>
    </div>
  );
}
