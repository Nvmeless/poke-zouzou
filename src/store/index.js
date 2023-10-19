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
const pokeApiSlice = createSlice({
  name: "pokedex",
  initialState: {
    pokedex: new Array(150).fill(0).map((e, i) => ({
      id: i + 1,
      status: "idle",
    })),
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPokedex.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchPokedex.fulfilled, (state, action) => {
        state.status = "succeed";
        if (action.payload?.id) {
          const pokefiche = {
            id: action.payload?.id,
            name: action.payload?.name,
            sprites: action.payload?.sprites,
            status: "succeed",
          };
          state.pokedex[pokefiche.id - 1] = pokefiche;
        } else {
          state.error = "Last Pokemon was not imported";
        }
      })
      .addCase(fetchPokedex.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

export const fetchPokedex = createAsyncThunk(
  "pokemon/fetch",
  async (payload) => {
    const config = pokeapi("get", `pokemon/${payload}`);
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
    pokedex: pokeApiSlice.reducer,
  },
});

export const { toggleTask, addTask, deleteTask } = todoSlice.actions;
