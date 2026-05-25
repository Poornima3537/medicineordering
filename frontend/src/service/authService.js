import axiosInstance
from "../api/axiosConfig";

const login = async (
  loginData
) => {

  const response =
    await axiosInstance.post(
      "/auth/login",
      loginData
    );

  return response.data;
};

const register = async (
  registerData
) => {

  const response =
    await axiosInstance.post(
      "/auth/register",
      registerData
    );

  return response.data;
};

const getProfile = async () => {

  const response =
    await axiosInstance.get(
      "/auth/profile"
    );

  return response.data;
};

const authService = {
  login,
  register,
  getProfile,
};

export default authService;
