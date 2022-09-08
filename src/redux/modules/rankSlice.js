import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  rank: [],
};

export const __getRankList = createAsyncThunk(
  "ranks/GET_RANK_LIST",
  async (payload, thunkAPI) => {
    const { data } = await axios.get(`http://3.39.231.71/api/movie`);
    return thunkAPI.fulfillWithValue(data);
  }
);

export const RankSlice = createSlice({
  name: "rank",
  initialState,
  reducers: {},
  extraReducers: {
    [__getRankList.fulfilled]: (state, action) => {
      console.log(action.payload.data);
      state.rank = action.payload.data;
    },
  },
});

export default RankSlice.reducer;
