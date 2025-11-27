import axios from "axios";

import { API_BASE_URL } from "@/lib/url";

export const getAllDist = async () => {
  const res = await axios.get(`${API_BASE_URL}/districts`);

  if (res.status !== 200) {
    throw new Error("something went wrong");
  }

  return res.data.data;
};

export const addDist = async (districtData: { name: string }) => {
  const res = await axios.post(`${API_BASE_URL}/districts`, districtData);

  if (res.status !== 201) {
    throw new Error("something went wrong");
  }

  return res.data.data;
};

export const updateDist = async (districtData: {
  id: number;
  state_id: number | null;
  name: string;
}) => {
  console.log("the district data in apiDistrict", districtData);

  const res = await axios.put(
    `${API_BASE_URL}/districts/${districtData.id}`,
    districtData
  );

  if (res.status !== 200) {
    throw new Error("something went wrong");
  }

  return res.data.data;
};

export const togggleDist = async (id: number, is_active: boolean) => {
  const res = await axios.patch(`${API_BASE_URL}/districts/${id}/status`, {
    is_active: !is_active,
  });

  if (res.status !== 200) {
    throw new Error("something went wrong");
  }

  return res.data.data;
};
