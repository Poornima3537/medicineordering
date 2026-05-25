import axiosInstance
from "../api/axiosConfig";

const placeOrder =
  async (orderData) => {

  const response =
    await axiosInstance.post(
      "/orders/place",
      orderData
    );

  return response.data;
};

const getMyOrders =
  async () => {

  const response =
    await axiosInstance.get(
      "/orders/my"
    );

  return response.data;
};

const orderService = {

  placeOrder,

  getMyOrders,
};

export default orderService;