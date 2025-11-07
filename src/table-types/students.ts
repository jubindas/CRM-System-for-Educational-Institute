export interface Student {
  id: number;
  name: string;
  phone: string;
  district: string;
  status: "Enquiry" | "Registered" | "Converted";
  date: string;
}
