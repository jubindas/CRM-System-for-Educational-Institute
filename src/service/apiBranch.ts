import axios from "axios";

import { API_BASE_URL } from "@/lib/url";

export const getAllBranches = async () => {
  const res = await axios.get(`${API_BASE_URL}/branches`);

  if (res.status !== 200) {
    throw new Error("something went wrong");
  }

  console.log("Branches response data:", res.data.data);
  return res.data.data;
};

export const addBranch = async (data: {
  district_id: number;
  name: string;
  email: string;
  password: string;
  remark: string;
}) => {
  const res = await axios.post(`${API_BASE_URL}/branches`, data);

  if (res.status !== 201) {
    throw new Error("something went wrong");
  }

  return res.data.data;
};

export const togggleBranch = async (id: number, is_active: boolean) => {
  const res = await axios.put(`${API_BASE_URL}/branches/${id}/status`, {
    is_active: !is_active,
  });

  if (res.status !== 200) {
    throw new Error("something went wrong");
  }

  return res.data.data;
};
