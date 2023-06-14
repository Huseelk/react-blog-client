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

export const fetchRemovePost = createAsyncThunk(
  "posts.fetchRemovePost",
  async (id: any) => await axios.delete(`/posts/${id}`)
);

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
    /* Get posts */
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

    /* Get tags */
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

    /* Delete post */
    builder.addCase(fetchRemovePost.pending, (state: any, action) => {
      state.posts.status = "loading";
    });
    builder.addCase(fetchRemovePost.fulfilled, (state: any, action) => {
      state.posts.items = state.posts.items.filter(
        (obj: any) => obj._id !== action.meta.arg
      );
      state.posts.status = "loaded";
    });
    builder.addCase(fetchRemovePost.rejected, (state: any) => {
      state.posts.status = "error";
    });
  },
});

export const postsReducer = postsSlice.reducer;
