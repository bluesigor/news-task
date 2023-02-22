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

export const getNews = createAsyncThunk("news/getNews", async () => {
  const res = await axios.get(API_BASE);

  return res.data;
});

const newsSlice = createSlice({
  name: "newsSlice",
  initialState,
  reducers: {},
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

export default newsSlice.reducer;
