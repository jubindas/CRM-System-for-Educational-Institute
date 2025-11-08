export type StudentsApplicationForm = {
  id: string;
  name: string;
  phone: string;
  course: string;
  joinedDate: string;
  fees: string;
  status: "Pending" |  "Approved" | "Rejected"
};
