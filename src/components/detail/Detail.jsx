import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { __getMoviesList } from "../../redux/modules/CommentSlice";

const Detail = () => {
  const dispatch = useDispatch();
  const [comments, setComments] = useState([
    { id: 0, nickName: "길동이", comment: "안녕하세요" },
    { id: 1, nickName: "발락", comment: "여기가 차붐의 나라입니까..?" },
  ]);

  const movieData = useSelector((state) => state.movie.movie);

  console.log(movieData);

  useEffect(() => {
    dispatch(__getMoviesList());
  }, []);

  //

  return (
    <DetailLayout>
      <MoviePosterDate>
        <MoviePoster>
          {movieData ==undefined ? 
           "받아온 이미지가 없음"  : 
            <PosterImg src={`${movieData[1].image}`} />
          }
        </MoviePoster>
        <div>
          <MovieTitle>
            {movieData ==undefined ? "받아온 제목이 없음" : movieData[1].title}
          </MovieTitle>
          <MovieContent>
            {movieData ==undefined ? "받아온 내용이 없음" : movieData[1].desc }
          </MovieContent>
        </div>
      </MoviePosterDate>
      <CommentsLayout>
        {comments.map((list) => (
          <Comment key={list.id}>
            <CommentContent>
              <div>{list.nickName}</div>
              <div>{list.comment}</div>
            </CommentContent>
            <Button>수정</Button>
            <Button>❌</Button>
          </Comment>
        ))}
      </CommentsLayout>
    </DetailLayout>
  );
};

export default Detail;

const DetailLayout = styled.div`
  max-width: 1200px;
  min-width: 800px;
  height: 600px;
  border: 2px solid;
  display: flex;
  flex-direction: column;
  align-items: left;
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
  margin-top: 30px;
  margin-left: 35px;
  text-align: center;
`;
const MovieContent = styled.p`
  width: 450px;
  height: 180px;
  border: 2px solid black;
  margin-left: 35px;
  margin-top: 20px;
  text-align: center;
`;
const CommentsLayout = styled.p`
  width: 735px;
  height: 600px;
  border: 2px solid black;
  margin: auto;
  margin-bottom: 10px;
  text-align: center;
`;
const Comment = styled.div`
  width: 700px;
  border: 2px solid black;
  margin: auto;
  margin-top: 5px;
  text-align: left;
  display: flex;
  flex-direction: row;
`;

const CommentContent = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  width: 40px;
  height: 40px;
  margin-left: 5px;
  margin-top: 2px;
  align-items: center;
  border: none;
  border-radius: 10px;
`;
