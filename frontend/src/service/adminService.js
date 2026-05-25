import axiosInstance from "../api/axiosConfig";

const getAllOrders = async () => {

  const response = await axiosInstance.get(
    "/admin/orders"
  );

  return response.data;
};

const getAllPrescriptions = async () => {

  const response = await axiosInstance.get(
    "/admin/prescriptions"
  );

  return response.data;
};

const getAllUsers = async () => {

  const response = await axiosInstance.get(
    "/admin/users"
  );

  return response.data;
};

const updatePrescriptionStatus = async (
  id,
  status
) => {

  const action =
    status === "VALID"
      ? "validate"
      : "reject";

  const response = await axiosInstance.put(
    `/admin/prescriptions/${id}/${action}`
  );

  return response.data;
};

const updateOrderStatus = async (
  id,
  status
) => {

  const response = await axiosInstance.put(
    `/admin/orders/${id}/status`,
    null,
    {
      params: { status },
    }
  );

  return response.data;
};

const updatePaymentStatus = async (
  id,
  paymentStatus
) => {

  const response = await axiosInstance.put(
    `/admin/orders/${id}/payment`,
    null,
    {
      params: { paymentStatus },
    }
  );

  return response.data;
};

const adminService = {

  getAllOrders,

  getAllPrescriptions,

  getAllUsers,

  updatePrescriptionStatus,

  updateOrderStatus,

  updatePaymentStatus,
};

export default adminService;
