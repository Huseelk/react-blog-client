import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchPosts = createAsyncThunk("posts.fetchPosts", async () => {
  const { data } = await axios.get("/posts");
  return data;
});

export const fetchTags = createAsyncThunk("posts.fetchTags", async () => {
  const { data } = await axios.get("/tags");
  return data;
});

const initialState = {
  posts: {
    items: [],
    status: "loading",
  },
  tags: {
    items: [],
    status: "loading",
  },
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state: any) => {
      state.posts.items = [];
      state.posts.status = "loading";
    });
    builder.addCase(fetchPosts.fulfilled, (state: any, action) => {
      state.posts.items = action.payload;
      state.posts.status = "loaded";
    });
    builder.addCase(fetchPosts.rejected, (state: any) => {
      state.posts.items = [];
      state.posts.status = "error";
    });

    builder.addCase(fetchTags.pending, (state: any) => {
      state.tags.items = [];
      state.tags.status = "loading";
    });
    builder.addCase(fetchTags.fulfilled, (state: any, action) => {
      state.tags.items = Array.from(action.payload);
      state.tags.status = "loaded";
    });
    builder.addCase(fetchTags.rejected, (state: any) => {
      state.tags.items = [];
      state.tags.status = "error";
    });
  },
});

export const postsReducer = postsSlice.reducer;
