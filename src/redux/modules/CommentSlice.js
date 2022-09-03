import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    movie: [],
};

export const __getMoviesList = createAsyncThunk("movies/GET_MOVIE_LIST", async (payload, thunkAPI) => {
  const { data } = await axios.get(`http://spartacodingclub.shop/web/api/movie`);
  return thunkAPI.fulfillWithValue(data);
});

export const CommentSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: {
    [__getMoviesList.fulfilled]: (state, action) => {
    console.log(action.payload)
      state.movie = action.payload.movies;
    },
  },
});
 
export default CommentSlice.reducer;

