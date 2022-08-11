import axios from "axios";

const API_URL = "/api/tasks";

const addTask = async (task, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL + "/", task, config);

  if (response.data.success) {
    return response.data.data;
  } else throw new Error(response.data.message);
};

const getTasks = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL + "/", config);

  if (response.data.success) {
    return response.data.data;
  } else throw new Error(response.data.message);
};

const todoService = {
  addTask,
  getTasks,
};

export default todoService;
