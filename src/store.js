import { configureStore } from "@reduxjs/toolkit";
import movie from "./redux/modules/CommentSlice"

const store = configureStore({
  reducer: {movie},
});

export default store;
