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

const deleteTask = async (taskID, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + "/" + taskID, config);

  if (response.data.success) {
    return response.data.data._id;
  } else throw new Error(response.data.message);
};

const updateTask = async (taskID, update, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(API_URL + "/" + taskID, update, config);

  if (response.data.success) {
    return response.data.data;
  } else throw new Error(response.data.message);
};

const todoService = {
  addTask,
  getTasks,
  deleteTask,
  updateTask,
};

export default todoService;
