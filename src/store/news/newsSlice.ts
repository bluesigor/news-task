import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { API_BASE } from "../../core/config/url";

import { Sharable } from "../../core/models";

type NewsState = {
  data: Sharable.NewsEntity[];
  loading: boolean;
  error: string | null;
};
const initialState: NewsState = {
  loading: false,
  data: [],
  error: null,
};

export const getNews = createAsyncThunk(
  "news/getNews",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(API_BASE);

      return res.data;
    } catch (err: any) {
      return rejectWithValue(err?.message);
    }
  }
);

export const deleteNews = createAsyncThunk(
  "news/deleteNews",
  async (id: number, { rejectWithValue, dispatch }) => {
    try {
      const res = await axios.delete(API_BASE + `/${id}`);
      if (res.status !== 200) {
        throw new Error("Failed");
      }

      dispatch(removePost(id));

      return res.data;
    } catch (err: any) {
      return rejectWithValue(err?.message);
    }
  }
);

const newsSlice = createSlice({
  name: "newsSlice",
  initialState,
  reducers: {
    removePost: (state, action: PayloadAction<number>) => {
      state.data = state.data.filter(
        (post: Sharable.NewsEntity) => post.id !== action.payload
      );
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getNews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        getNews.fulfilled,
        (state, action: PayloadAction<Sharable.NewsEntity[]>) => {
          state.data = action.payload;
          state.error = null;
          state.loading = false;
        }
      )
      .addCase(getNews.rejected, (state, action) => {
        state.error = action.error.message ?? "Something went wrong...";
      });
  },
});

export const { removePost } = newsSlice.actions;

export default newsSlice.reducer;
