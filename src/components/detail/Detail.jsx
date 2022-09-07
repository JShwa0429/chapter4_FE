import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { PlusSquareTwoTone } from "@ant-design/icons";

import EditButton from "./EditButton";
import { __getMoviesList } from "../../redux/modules/MovieSlice";
import {
  __getCommentList,
  __removeComment,
  addComment,
} from "../../redux/modules/CommentSlice";

const Detail = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(0);
  const [comments, setComments] = useState([
    {
      id: 2,
      nickName: "소크라테스",
      editCheck: false,
      likes: 0,
      dislikes: 0,
      dislikeCheck: false,
    },
  ]);
  const [newMovieData, setNewMovieData] = useState(null);
  const commentData = useSelector((state) => state.comment.comment);
  console.log("렌더링 1번째")
  
  useEffect(() => {
    dispatch(__getCommentList());
    console.log("렌더링 2번째")
  }, []);

  

  const addButton = (inputRef) => {
    if (comments.accessToken == 1) {
      window.alert("로그인 후 이용해주세요");
    } else {
      if (inputRef.current.value == "") {
        window.alert("댓글을 입력해주세요!");
      } else {
        dispatch(
          addComment({ ...comments[0], id:++comments[0].id ,content: inputRef.current.value })
        );
      }
    }
  };
  console.log(commentData)
  // <PosterImg src={movieData[0].data.imgUrl} />
  // <MovieTitle>{movieData[0].data.title}</MovieTitle>
  // <MovieContent>{movieData[0].data.detail}</MovieContent>
  return (
    <DetailLayout>
      <MoviePosterDate>
  <MoviePoster>{commentData? null :<PosterImg src={commentData[0].imgUrl} />}</MoviePoster>
        <div>
        {commentData? null :<MovieTitle>{commentData[0].title}</MovieTitle>}
        {commentData? null :<MovieContent>{commentData[0].detail}</MovieContent>}
        </div>
      </MoviePosterDate>
      <div style={{ flexDirection: "row" }}>
        <AddCommentInput ref={inputRef} placeholder={"댓글을 추가해보세요!"} />
        <PlusSquareTwoTone
          onClick={() => addButton(inputRef)}
          style={{ fontSize: "30px", float: "right", marginRight: "30px" }}
        />
      </div>

      <EditButton />
    </DetailLayout>
  );
};

export default Detail;

const DetailLayout = styled.div`
  max-width: 1200px;
  min-width: 800px;
  height: 800px;
  border: 2px solid;
  display: flex;
  flex-direction: column;
  align-items: left;
  margin: auto;
`;

const MoviePosterDate = styled.div`
  max-width: 1000px;
  min-width: 600px;
  height: 300px;
  margin: 30px;
  border: 2px solid black;
  display: flex;
  flex-direction: row;
`;

const MoviePoster = styled.div`
  width: 200px;
  height: 285px;
  margin: 5px;
  border: none;
  text-align: center;
`;

const PosterImg = styled.img`
  width: 198px;
  height: 282px;
  margin: 0px;
  text-align: center;
  border-radius: 20px;
`;

const MovieTitle = styled.h2`
  font-size: 40px;
  font-weight: bold;
  width: 450px;
  height: 50px;
  border: none;
  margin-top: 20px;
  margin-left: 35px;
  text-align: center;
`;
const MovieContent = styled.p`
  width: 510px;
  height: 200px;
  border: 2px solid black;
  margin:auto;
  margin-left: 5px;
  margin-top: 20px;
  text-align: center;
  overflow:hidden;
  text-overflow: ellipsis;
`;

const AddCommentInput = styled.input`
  width: 500px;
  height: 30px;
  border-radius: 20px;
  border: 2px solid black;
  margin-left: 30px;
  margin-bottom: 10px;
  text-align: center;
`;
