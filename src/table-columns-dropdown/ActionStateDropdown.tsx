import { useMutation, useQueryClient } from "@tanstack/react-query";
import { togggleState } from "@/service/apiState";
import AddStateDialog from "@/components/AddStateDialog";
import type { States } from "@/table-types/states";
import { toast } from "sonner";

type ActionsCellProps = {
  rowData: States;
};

export default function ActionStateDropdown({ rowData }: ActionsCellProps) {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ id, status }: { id: number; status: boolean }) =>
      togggleState(id, status),
    onSuccess: () => {
      toast("deactivated");
      queryClient.invalidateQueries({ queryKey: ["states"] });
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
      <AddStateDialog
        mode="edit"
        stateData={{ ...rowData, id: Number(rowData.id) }}
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
