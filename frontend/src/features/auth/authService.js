import axios from "axios";

const API_URL = "/api/users";

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL + "/register", userData);

  if (response.data.success) {
    localStorage.setItem("user", JSON.stringify(response.data));
    return response.data.data;
  } else throw new Error(response.data.message);
};

const authService = {
  register,
};

export default authService;
