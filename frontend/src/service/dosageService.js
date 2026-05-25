import axiosInstance
from "../api/axiosConfig";

const getAllDosages =
  async () => {

  const response =
    await axiosInstance.get(
      "/dosages"
    );

  return response.data;
};

const addDosage =
  async (data) => {

  const response =
    await axiosInstance.post(
      "/admin/dosages",
      data
    );

  return response.data;
};

const deleteDosage =
  async (id) => {

  const response =
    await axiosInstance.delete(
      `/admin/dosages/${id}`
    );

  return response.data;
};

const dosageService = {

  getAllDosages,

  addDosage,

  deleteDosage,
};

export default dosageService;