import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
export const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todos: [],
    },
    reducers: {
        addTodo: (state, action) => {
            console.log(action.payload);
            const newTodo = {
                ...action.payload,
                id: uuidv4(),
            };
            state.todos.push(newTodo);
        },
        removeTodo: (state, action) => {
            state.todos.filter((todo) => todo.id !== action.id);
        },
    },
});
export const selectTodo = (state, id) =>
    state.todos.filter((todo) => todo.id == id);
export const allTodo = (state) => state.todo.todos;
export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;