import { configureStore } from "@reduxjs/toolkit";
import data from "./dataSlice/dataSlice";

export default configureStore({
  reducer: {
    books: data,
  },
});
