import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserById = createAsyncThunk("fetchData", async () => {
  const url =
    "https://www.googleapis.com/books/v1/volumes?q=coding&maxResults=10&key=AIzaSyCxG7X-PSgnVSx1M_FKpgbjEg8dLgs7WbA";
  const response = await axios.get(url);
  return response.data;
});

export const dataSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    data: [],
    detailData: {},
    isLoading: false,
    isError: false,
  },
  reducers: {
    addDetailData(state, action) {
      state.detailData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.data = action.payload.items;
        state.isLoading = false;
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(fetchUserById.pending, (state, action) => {
        state.isLoading = true;
      });
  },
});

export const { addDetailData } = dataSlice.actions;

export default dataSlice.reducer;
