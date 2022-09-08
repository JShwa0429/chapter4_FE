import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginReducer from "../src/redux/modules/loginSlice";
import signupReducer from "../src/redux/modules/signupSlice";
import rankReducer from "./redux/modules/rankSlice";
import thunk from "redux-thunk";

const middlewares = [thunk];
// 리듀서 통합
const rootReducer = combineReducers({
  login: loginReducer,
  signup: signupReducer,
  rank: rankReducer,
});
// 스토어 연결
const store = configureStore({
  reducer: rootReducer,
  middleware: [...middlewares],
});

export default store;
