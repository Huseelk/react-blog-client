import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";
import { authData } from "../../components/login/Login";

export const fetchAuth = createAsyncThunk(
  "auth/fetchAuth",

  async (params: authData) => {
    const { data } = await axios.post("/auth/login", params);
    return data;
  }
);

export const fetchRegister = createAsyncThunk(
  "auth/fetchRegister",

  async (params: authData) => {
    const { data } = await axios.post("/auth/register", params);
    return data;
  }
);

export const fetchAuthMe = createAsyncThunk(
  "auth/fetchAuthMe",

  async () => {
    const { data } = await axios.get("/auth/me");
    return data;
  }
);

const initialState = {
  data: null,
  status: "loading",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAuth.pending, (state: any) => {
      state.status = "loading";
      state.data = null;
    });
    builder.addCase(fetchAuth.fulfilled, (state: any, action) => {
      state.data = action.payload;
      state.status = "loaded";
    });
    builder.addCase(fetchAuth.rejected, (state: any) => {
      state.status = "error";
      state.data = null;
    });

    builder.addCase(fetchAuthMe.pending, (state: any) => {
      state.status = "loading";
      state.data = null;
    });
    builder.addCase(fetchAuthMe.fulfilled, (state: any, action) => {
      state.data = action.payload;
      state.status = "loaded";
    });
    builder.addCase(fetchAuthMe.rejected, (state: any) => {
      state.status = "error";
      state.data = null;
    });

    builder.addCase(fetchRegister.pending, (state: any) => {
      state.status = "loading";
      state.data = null;
    });
    builder.addCase(fetchRegister.fulfilled, (state: any, action) => {
      state.data = action.payload;
      state.status = "loaded";
    });
    builder.addCase(fetchRegister.rejected, (state: any) => {
      state.status = "error";
      state.data = null;
    });
  },
});

export const selectIsAuth = (state: any): boolean => Boolean(state.auth.data);

export const authReducer = authSlice.reducer;

export const { logout } = authSlice.actions;
