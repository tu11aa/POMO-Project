import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import todoReducer from "../features/todolist/todoSlice";
import roomReducer from "../features/room/roomSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    todo: todoReducer,
    room: roomReducer,
  },
});
