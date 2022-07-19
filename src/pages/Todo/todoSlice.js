import { createSlice, current } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
export const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todos: [{
                text: "todoText1",
                completed: false,
                category: "Groceries",
                id: "705d955f-c028-46db-aa15-620b838c23a5",
            },
            {
                text: "todoText2",
                completed: true,
                category: "Uncategorized",
                id: "d2a6e660-8858-4229-8a56-a44cb555649d",
            },
            {
                text: "todoText3",
                completed: false,
                category: "Uncategorized",
                id: "bc811bd9-dd06-4210-89b7-62ec710b8a66",
            },
            {
                text: "todoText4",
                completed: false,
                category: "Groceries",
                id: "8554c361-d0ee-40be-ac56-cd6b39d51873",
            },
            {
                text: "todoText",
                completed: false,
                category: "Uncategorized",
                id: "64757942-303b-4892-a96d-c0bdf48028a3",
            },
        ],
        categoryFilter: "All",
    },
    reducers: {
        addTodo: (state, action) => {
            console.log("todoSlice: add todo action", action.payload);
            const newTodo = {
                ...action.payload,
                id: uuidv4(),
            };
            state.todos.push(newTodo);
        },
        removeTodo: (state, action) => {
            state.todos.filter((todo) => todo.id !== action.id);
        },
        toggleTodo: (state, action) => {
            const newState = state.todos.map((todo) => {
                if (todo.id == action.payload.id) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    };
                }
                return {
                    ...todo,
                };
            });
            state.todos = newState;
        },
        updateFilter: (state, action) => {
            return {
                ...state,
                categoryFilter: action.payload.category,
            };
        },
    },
});

export const allTodo = (state) => state.todo.todos;
export const getAllCate = (state) => {
    const cates = new Set();
    state.todo.todos.forEach((todo) => {
        if (todo.category !== "Uncategorized") cates.add(todo.category);
    });
    return [...cates];
};
export const getCurrentCate = (state) => state.todo.categoryFilter;
export const todoByFilter = (state) => {
    console.log("re rendered");
    const cate = state.todo.categoryFilter;
    if (!cate || cate == "All") {
        return state.todo.todos;
    } else {
        return state.todo.todos.filter((todo) => todo.category == cate);
    }
};
export const { addTodo, removeTodo, toggleTodo, updateFilter } =
todoSlice.actions;

export default todoSlice.reducer;