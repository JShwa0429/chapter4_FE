import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  movie: [],
};

export const __getMoviesList = createAsyncThunk(
  "movies/GET_MOVIE_LIST",
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
    [__getMoviesList.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.movie = action.payload.movies;
    },
  },
});

export default RankSlice.reducer;
