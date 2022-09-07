import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  comment: [
    {
      id: 0,
      accessToken: true,
      nickName: "길동이",
      content: "저는 어디에도 있고 어디에도 없습니다.",
      editCheck: false,
      dislikeCheck: false,
      likes: 0,
      dislike: 0,
    },
    {
      id: 1,
      accessToken: false,
      nickName: "발락",
      content: "여기가 차붐의 나라입니까..?",
      editCheck: false,
      dislikeCheck: false,
      likes: 0,
      dislikes: 0,
    },
    {
      id: 2,
      accessToken: false,
      nickName: "예수그리스도",
      content: '"AMEN"',
      editCheck: false,
      dislikeCheck: false,
      likes: 0,
      dislikes: 0,
    },
  ],
};

export const __getCommentList = createAsyncThunk(
  "GET_COMMENT_LIST",
  async (payload, thunkAPI) => {
    const { data } = await axios.get(
      `http://3.39.231.71/api/movie/1`
    );
    return thunkAPI.fulfillWithValue(data);
  }
);

export const addComment = createAsyncThunk("ADD_COMMENT", async (payload, thunkAPI) => {
  const { data } = await axios.post("http://localhost:3001/success/data/comments", payload);
  return thunkAPI.fulfillWithValue(data);
});

export const __removeComment = createAsyncThunk(
  "REMOVE_COMMENT",
  async (payload, thunkAPI) => {
    const res = await axios.delete(
      `http://localhost:3001/comment/${payload.id}?todoId=${payload.todoId}`
    );
    return thunkAPI.fulfillWithValue(res);
  }
);

export const CommentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    addComment: (state, action) => {
      state.comment = state.comment.concat(action.payload);
    },
    removeComment: (state, action) => {
      state.comment = state.comment.filter((list)=> list.id !== action.payload.id);
    },
    saveComment: (state, action) => {
      state.comment = state.comment.map((list)=> list.id === action.payload.id ? {...list,comment:action.payload.comment, editCheck:false } :list);
    },
    toggleEditCheck: (state, action) => {
      state.comment = state.comment.map((comment) => {
        return comment.id === action.payload.id
          ? { ...comment, editCheck: !action.payload.editCheck }
          : comment;
      });
    },
    toggleLikeData: (state, action) => {
      state.comment = state.comment.map((comment) => {
        return comment.id === action.payload.id
          ? comment.editCheck === true
            ? comment.likes>1? 
                {...comment,
                  likes: --comment.likes} : 
                {...comment,
                  editCheck: !action.payload.editCheck,
                  likes: --comment.likes}
              
            : {
                ...comment,
                editCheck: !action.payload.editCheck,
                likes: ++comment.likes,
              }
          : comment;
      });
    },
    toggleDistLikeData: (state, action) => {
      state.comment = state.comment.map((comment) => {
        return comment.id === action.payload.id
          ? comment.dislikeCheck === true
            ? comment.dislikes>1? 
                {...comment,
                  dislikes: --comment.dislikes} : 
                {...comment,
                  dislikeCheck: !action.payload.dislikeCheck,
                  dislikes: --comment.dislikes}
              
            : {
                ...comment,
                dislikeCheck: !action.payload.dislikeCheck,
                dislikes: ++comment.dislikes,
              }
          : comment;
      });
    }
  },

  extraReducers: {
    [__getCommentList.fulfilled]: (state, action) => {
      console.log(action.payload)
      state.comment = [action.payload.data.comments[0]];
    },

    [addComment.fulfilled]: (state, action) => {
      console.log(action.payload)
      state.comment.push(action.payload);
    },
  },
});

export const { toggleEditCheck, toggleLikeData,toggleDistLikeData,removeComment,saveComment } = CommentSlice.actions;
export default CommentSlice.reducer;
