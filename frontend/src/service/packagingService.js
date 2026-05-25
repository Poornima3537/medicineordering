import axiosInstance
from "../api/axiosConfig";

const getAllPackagings =
  async () => {

  const response =
    await axiosInstance.get(
      "/packagings"
    );

  return response.data;
};

const addPackaging =
  async (data) => {

  const response =
    await axiosInstance.post(
      "/packagings",
      data
    );

  return response.data;
};

const deletePackaging =
  async (id) => {

  const response =
    await axiosInstance.delete(
      `/packagings/${id}`
    );

  return response.data;
};

const packagingService = {

  getAllPackagings,

  addPackaging,

  deletePackaging,
};

export default packagingService;
