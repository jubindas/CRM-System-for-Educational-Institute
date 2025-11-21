import axios from "axios";

import { API_BASE_URL } from "@/lib/url";

export const getAllStates = async () => {
  const res = await axios.get(`${API_BASE_URL}/states`);

  if (res.status !== 200) {
    throw new Error("something went wrong");
  }

  return res.data.data;
};

export const addStates = async (stateData: { name: string }) => {
  const res = await axios.post(`${API_BASE_URL}/states`, stateData);

  if (res.status !== 201) {
    throw new Error("something went wrong");
  }

  return res.data.data;
};
