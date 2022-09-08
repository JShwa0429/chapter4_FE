import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// axios 기본 세팅
import { api } from "../../shared/api";


// 회원가입
export const __signup = createAsyncThunk(
  "signup/SIGNUP_LOG",
  async (payload, thunkAPI) => {
     const { data } = await api.post("/api/user/signup", payload);

    // 회원가입 성공 시 alert & 상태 저장
    alert("회원가입이 완료됐습니다.");
    return thunkAPI.fulfillWithValue(data);
  }
);

// // slice
const signupSlice = createSlice({
  name: "signup",
  initialState: {
    success: false,
    checkName: false,
    checkNick: false,
    checkMsg: "",
  },
  reducers: {

  },

  extraReducers: (builder) => {
    builder
      // 회원가입 하기
      .addCase(__signup.fulfilled, (state, action) => {
        // 회원가입 상태 저장
        state.success = action.payload;
      })

  },
});


// export const { } = signupSlice.actions;
export default signupSlice.reducer;