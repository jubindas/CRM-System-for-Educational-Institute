export interface Student {
  id: number;
  name: string;
  phone: string;
  district: string;
  branch: string;
  status: "Enquiry" | "Registered" | "Converted";
}
