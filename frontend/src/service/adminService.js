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

const updatePrescriptionStatus = async (
  id,
  status
) => {

  const response = await axiosInstance.put(
    `/admin/prescriptions/${id}`,
    { status }
  );

  return response.data;
};

const updateOrderStatus = async (
  id,
  status
) => {

  const response = await axiosInstance.put(
    `/admin/orders/${id}`,
    { status }
  );

  return response.data;
};

const updatePaymentStatus = async (
  id,
  paymentStatus
) => {

  const response = await axiosInstance.put(
    `/admin/orders/payment/${id}`,
    { paymentStatus }
  );

  return response.data;
};

const adminService = {

  getAllOrders,

  getAllPrescriptions,

  updatePrescriptionStatus,

  updateOrderStatus,

  updatePaymentStatus,
};

export default adminService;