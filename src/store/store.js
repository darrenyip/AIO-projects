import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../pages/Todo/todoSlice";
export default configureStore({
    reducer: {
        todo: todoReducer,
    },
});