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
      "/dosages",
      data
    );

  return response.data;
};

const deleteDosage =
  async (id) => {

  const response =
    await axiosInstance.delete(
      `/dosages/${id}`
    );

  return response.data;
};

const dosageService = {

  getAllDosages,

  addDosage,

  deleteDosage,
};

export default dosageService;
