import axios from "axios";

const API_URL = "/api/rooms";

const createRoom = async (data, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL + "/", data, config);

  if (response.data.success) {
    return response.data.data;
  } else throw new Error(response.data.message);
};

const getRooms = async (token) => {
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

const getChatbox = async (roomID, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      roomID,
    },
  };

  const response = await axios.get("/api/chatboxes" + "/", config);

  if (response.data.success) {
    return response.data.data;
  } else throw new Error(response.data.message);
};

const deleteRoom = async (roomID, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + "/" + roomID, config);

  if (response.data.success) {
    return response.data.data._id;
  } else throw new Error(response.data.message);
};

const updateRoom = async (update, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(
    API_URL + "/" + update.roomID,
    update.data,
    config
  );

  if (response.data.success) {
    return { data: response.data.data, index: update.index };
  } else throw new Error(response.data.message);
};

const todoService = {
  createRoom,
  getRooms,
  deleteRoom,
  updateRoom,
  getChatbox,
};

export default todoService;
