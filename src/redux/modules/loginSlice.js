import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// axios 기본 세팅
import { api } from "../../shared/api";


// 로그인
export const __login = createAsyncThunk(
  "log/LOGIN_LOG",
  async (payload, thunkAPI) => {
    const response = await api.post("/api/user/login", payload);
    // 토큰 localstorge 저장하기
    localStorage.setItem("authorization", response.headers.authorization);
    localStorage.setItem("refresh-token", response.headers["refresh-token"]);

    return response.data;
  }
);

// slice
const loginSlice = createSlice({
  name: "login",
  initialState: {
    user: { nickName: "", result: false },
    loading: false,
    error: null,
  },
  reducers: {
  
  },
  //
  extraReducers: (builder) => {
    builder

      //로그인
      .addCase(__login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = {
          nickName: action.payload.nickName,
          result: action.payload.result,
        };
      })
      .addCase(__login.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(__login.pending, (state, action) => {
        state.loading = true;
      })

  },
});


export const { logOutUser } = loginSlice.actions;
export default loginSlice.reducer;