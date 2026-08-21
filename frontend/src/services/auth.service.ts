import api from './api';

interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface LoginData {
  email: string;
  password: string;
}

export const register = async (data: RegisterData) => {
  const response = await api.post("/auth/register", data);

  return response.data;
};

export const login = async (data: LoginData) => {
  const response = await api.post("/auth/login", data);

  return response.data;
};

export const getUserProfile = async () => {
  const response = await api.get("/auth/profile");

  return response.data;
};