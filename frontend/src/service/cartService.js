import axiosInstance
from "../api/axiosConfig";

const addToCart =
  async (medicineId) => {

  const response =
    await axiosInstance.post(
      "/cart/add",
      {
        medicineId,
        quantity: 1,
      }
    );

  return response.data;
};

const getCart =
  async () => {

  const response =
    await axiosInstance.get(
      "/cart"
    );

  return response.data;
};

const updateQuantity =
  async (cartItemId, quantity) => {

  const response =
    await axiosInstance.put(
      `/cart/update/${cartItemId}`,
      { quantity }
    );

  return response.data;
};

const removeFromCart =
  async (cartItemId) => {

  const response =
    await axiosInstance.delete(
      `/cart/remove/${cartItemId}`
    );

  return response.data;
};

const cartService = {

  addToCart,

  getCart,

  updateQuantity,

  removeFromCart,
};

export default cartService;
