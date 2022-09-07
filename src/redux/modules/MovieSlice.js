import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    movie: [],
};

export const __getMoviesList = createAsyncThunk("movies/GET_MOVIE_LIST", async (payload, thunkAPI) => {
  try{
  const { data } = await axios.get(`http://3.39.231.71/`);
  return thunkAPI.fulfillWithValue(data);}
  catch (error) {
    return thunkAPI.rejectWithValue(error.code);
  }
});

//const { data } = await axios.get(`http://spartacodingclub.shop/web/api/movie`);

export const MovieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: {
    [__getMoviesList.fulfilled]: (state, action) => {
      state.movie = action.payload;
    },
    [__getMoviesList.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});
 
export default MovieSlice.reducer;

