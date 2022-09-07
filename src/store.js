import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginReducer from "../src/redux/modules/loginSlice";
import signupReducer from "../src/redux/modules/signupSlice";
import thunk from "redux-thunk";
import movie from "./redux/modules/MovieSlice"
import comment from "./redux/modules/CommentSlice"

const middlewares = [thunk];
// 리듀서 통합
const rootReducer = combineReducers({
  login: loginReducer,
  signup: signupReducer,
});
// 스토어 연결
const store = configureStore({

  reducer: rootReducer,
   middleware: [...middlewares],
});

export default store;