import {
  createSlice,
  configureStore,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import pokeapi, { apiZouzoumon } from "../toolkit/api.config";
import axios from "axios";
const initialState = [
  {
    id: Date.now(),
    from: "Game",
    title: "Hello",
    content: "Hello, Log in to start your day !",
    commit: Date.now(),
  },
];

const messageSlice = createSlice({
  name: "messages",
  initialState: initialState,
  reducers: {
    addMessage: (state, action) => {
      //action = {type: "ADD_NEW_TASK", payload: "New task"}
      const newMessage = {
        id: Date.now() + action.payload.title + action.payload.from,
        from: action.payload.from,
        title: action.payload.title,
        content: action.payload.content,
        commit: Date.now(),
      };
      state.push(newMessage);
    },
    // toggleTask: (state, action) => {
    //   //action = {type: "TOGGLE_EXISTING_TASK", payload: 4}
    //   const task = state.find((t) => t.id === action.payload);
    //   task.isDone = !task.isDone;
    // },
    deleteMessage: (state, action) => {
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
const userSlice = createSlice({
  name: "user",
  initialState: {
    token: false,
    user: {},
    logged: false,
    auth: false,
    status: "idle",
    error: null,
    admin: false,
    message: "",
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loginCheck.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(loginCheck.fulfilled, (state, action) => {
        if (action?.payload?.data?.hasOwnProperty("token")) {
          state.status = "succeed";

          state.logged = true;
          state.token = action.payload.data.token;
        } else {
          state.logged = false;
          state.status = "failed";
        }
      })
      .addCase(loginCheck.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.request.response;
      })
      .addCase(getProfile.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.status = "succeed";
        state.auth = true;
        state.admin = action.payload.data.roles.includes("ADMIN");
        state.user = action.payload.data;
        state.username = action.payload.data.username;

        // if (action?.payload?.hasOwnProperty("data")) {
        //   state.user = action.payload.data;
        //   //Do
        // }
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.request.response;
      });
  },
});
export const loginCheck = createAsyncThunk("user/login", async (payload) => {
  const config = apiZouzoumon("post", `login_check`, payload, null);
  const response = await axios(config)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });

  return response;
});
export const getProfile = createAsyncThunk("user/profile", async (payload) => {
  const config = apiZouzoumon("get", `profile`, {}, payload?.token);
  const response = await axios(config)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });

  return response;
});
export const store = configureStore({
  reducer: {
    pokedex: pokeApiSlice.reducer,
    user: userSlice.reducer,
    messages: messageSlice.reducer,
  },
});

export const { addMessage, deleteMessage } = messageSlice.actions;
