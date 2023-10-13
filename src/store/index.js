import {
  createSlice,
  configureStore,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import pokeapi from "../toolkit/api.config";
import axios from "axios";
const initialState = [
  { id: 2, title: "Se Calcifier la glande pinéale", isDone: false },
  { id: 1, title: "Consideration a zeulé", isDone: false },
];

const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    addTask: (state, action) => {
      console.log(action);
      //action = {type: "ADD_NEW_TASK", payload: "New task"}
      const newTask = {
        id: Date.now(),
        title: action.payload,
        isDone: false,
      };
      state.push(newTask);
    },
    toggleTask: (state, action) => {
      //action = {type: "TOGGLE_EXISTING_TASK", payload: 4}
      const task = state.find((t) => t.id === action.payload);
      task.isDone = !task.isDone;
    },
    deleteTask: (state, action) => {
      //action = {type: "DELETE_EXISTING_TASK", payload: 6}

      state = state.filter((t) => t.id !== action.payload);
      return state;
    },
  },
});
const pokeSlice = createSlice({
  name: "pokezouzou",
  initialState: {
    pokezouzou: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPokezouzou.pending, (state, action) => {
        console.log("Pending");
        state.status = "loading";
        console.log("loading case");
      })
      .addCase(fetchPokezouzou.fulfilled, (state, action) => {
        state.status = "succeed";
        state.pokezouzou = action.payload;
        console.log("success case");
      })
      .addCase(fetchPokezouzou.rejected, (state, action) => {
        state.status = "failed";
        console.log("Failed case");
      });
  },
});

export const fetchPokezouzou = createAsyncThunk(
  "pokemon/fetch",
  async (payload) => {
    const config = pokeapi("get", "pokemon/132");
    const response = await axios(config)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
    return response.data;
  }
);
export const store = configureStore({
  reducer: {
    todoList: todoSlice.reducer,
    pokezouzou: pokeSlice.reducer,
  },
});

export const { toggleTask, addTask, deleteTask } = todoSlice.actions;
