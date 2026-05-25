import axiosInstance from "../api/axiosConfig";

const getAllMedicines = async () => {

  const response = await axiosInstance.get(
    "/medicines"
  );

  return response.data;
};

const addMedicine = async (medicineData) => {

  const response = await axiosInstance.post(
    "/admin/medicines",
    medicineData
  );

  return response.data;
};

const updateMedicine = async (
  id,
  medicineData
) => {

  const response = await axiosInstance.put(
    `/admin/medicines/${id}`,
    medicineData
  );

  return response.data;
};

const deleteMedicine = async (id) => {

  const response = await axiosInstance.delete(
    `/admin/medicines/${id}`
  );

  return response.data;
};

const medicineService = {

  getAllMedicines,

  addMedicine,

  updateMedicine,

  deleteMedicine,
};

export default medicineService;