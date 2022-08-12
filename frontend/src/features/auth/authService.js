import axios from "axios";

const API_URL = "/api/users";

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL + "/register", userData);

  if (response.data.success) {
    localStorage.setItem("user", JSON.stringify(response.data.data));
    return response.data.data;
  } else throw new Error(response.data.message);
};

const login = async (userData) => {
  const response = await axios.post(API_URL + "/login", userData);

  if (response.data.success) {
    localStorage.setItem("user", JSON.stringify(response.data.data));
    return response.data.data;
  } else throw new Error(response.data.message);
};

// Logout user
const logout = () => localStorage.removeItem("user");

// Update user
const updateUser = async (data, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(
    API_URL + "/" + data.userID,
    data.data,
    config
  );

  if (response.data.success) {
    localStorage.setItem("user", JSON.stringify(response.data.data));
    return response.data.data;
  } else throw new Error(response.data.message);
};

const authService = {
  register,
  login,
  logout,
  updateUser,
};

export default authService;
