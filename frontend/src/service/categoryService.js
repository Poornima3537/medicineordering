import axiosInstance
from "../api/axiosConfig";

const getAllCategories =
  async () => {

  const response =
    await axiosInstance.get(
      "/categories"
    );

  return response.data;
};

const addCategory =
  async (data) => {

  const response =
    await axiosInstance.post(
      "/categories",
      data
    );

  return response.data;
};

const deleteCategory =
  async (id) => {

  const response =
    await axiosInstance.delete(
      `/categories/${id}`
    );

  return response.data;
};

const categoryService = {

  getAllCategories,

  addCategory,

  deleteCategory,
};

export default categoryService;
