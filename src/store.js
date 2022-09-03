import { configureStore } from "@reduxjs/toolkit";
import movie from "./redux/modules/CommentSlice"
import login from "./redux/modules/loginSlice"

const store = configureStore({
  reducer: {movie, login },
});

export default store;
