import axiosInstance
from "../api/axiosConfig";

const uploadPrescription =
  async (data) => {

  const response =
    await axiosInstance.post(
      "/prescriptions/upload",
      data
    );

  return response.data;
};

const getMyPrescriptions =
  async () => {

  const response =
    await axiosInstance.get(
      "/prescriptions/my"
    );

  return response.data;
};

const prescriptionService = {

  uploadPrescription,

  getMyPrescriptions,
};

export default prescriptionService;