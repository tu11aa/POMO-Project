import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import roomService from "./roomService";

const initialState = {
  rooms: [],
  room: null,
  chatbox: null,
  messages: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const createRoom = createAsyncThunk(
  "todo/createRoom",
  async (room, thunkAPI) => {
    try {
      const token = JSON.parse(localStorage.getItem("user")).token;
      return await roomService.createRoom(room, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getRooms = createAsyncThunk(
  "todo/getRooms",
  async (_, thunkAPI) => {
    try {
      const token = JSON.parse(localStorage.getItem("user")).token;
      return await roomService.getRooms(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const deleteRoom = createAsyncThunk(
  "todo/deleteRoom",
  async (taskID, thunkAPI) => {
    try {
      const token = JSON.parse(localStorage.getItem("user")).token;
      return await roomService.deleteRoom(taskID, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const updateRoom = createAsyncThunk(
  "todo/updateRoom",
  async (update, thunkAPI) => {
    try {
      const token = JSON.parse(localStorage.getItem("user")).token;
      return await roomService.updateRoom(update, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getChatbox = createAsyncThunk(
  "todo/getChatbox",
  async (roomID, thunkAPI) => {
    try {
      const token = JSON.parse(localStorage.getItem("user")).token;
      return await roomService.getChatbox(roomID, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const addChat = createAsyncThunk(
  "todo/addChat",
  async (data, thunkAPI) => {
    try {
      const token = JSON.parse(localStorage.getItem("user")).token;
      return await roomService.addChat(data, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = "";
    },
    setRoom: (state, action) => {
      state.room = state.rooms[action.payload];
    },
  },
  extraReducers: (builder) => {
    builder
      //createRoom
      .addCase(createRoom.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createRoom.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.rooms.push(action.payload);
      })
      .addCase(createRoom.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      //getRooms
      .addCase(getRooms.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRooms.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.rooms = action.payload;
      })
      .addCase(getRooms.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      //deleteTask
      .addCase(deleteRoom.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteRoom.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.rooms = state.rooms.filter((task) => task._id !== action.payload);
      })
      .addCase(deleteRoom.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      //updateRoom
      .addCase(updateRoom.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateRoom.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.rooms[action.payload.index] = action.payload.data;
      })
      .addCase(updateRoom.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      //getChatbox
      .addCase(getChatbox.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getChatbox.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.chatbox = action.payload;
        state.messages = action.payload.messageIDs;
      })
      .addCase(getChatbox.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      //addChatbox
      .addCase(addChat.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addChat.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        // state.chatbox = action.payload;
        // state.messages = action.payload.messageIDs;
      })
      .addCase(addChat.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset, setRoom } = roomSlice.actions;
export default roomSlice.reducer;
