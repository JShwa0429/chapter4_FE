import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Navigate, useNavigate } from "react-router-dom";

import { api } from "../../shared/api";
import { useDispatch, useSelector } from "react-redux";
import { PlusSquareOutlined } from "@ant-design/icons";

import EditButton from "./EditButton";
import { __getMoviesList } from "../../redux/modules/MovieSlice";
import {
  __getCommentList,
  __addComment,
} from "../../redux/modules/CommentSlice";

const Detail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const inputRef = useRef(0);
  const [comments, setComments] = useState([]);
  const [findToken, setFindToken] = useState(null);
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const getDatas = async () => {
      await api.get(`/api/movie/1`).then((res) => setMovieData(res.data.data));
    };
    getDatas();
  }, []);

  const addButton = (inputRef) => {
    if (comments.accessToken == 1) {
      window.alert("로그인 후 이용해주세요");
      navigate("/login");
    } else {
      if (inputRef.current.value == "") {
        window.alert("댓글을 입력해주세요!");
      } else {
        dispatch(
          __addComment({
            ...comments,
            id: movieData.id,
            content: inputRef.current.value,
          })
        );
      }
    }
  };
  useEffect(() => {}, [addButton]);

  return (
    <div>
      <OttHeader>
        <HeaderTitle
          onClick={() => {
            navigate("/");
          }}
        >
          OTT TOP TEN
        </HeaderTitle>
      </OttHeader>
      <DetailLayout>
        <MoviePosterData>
          <MoviePoster>
            {movieData == null ? null : <PosterImg src={movieData.imgUrl} />}
          </MoviePoster>
          <div>
            {movieData == null ? null : (
              <MovieTitle>{movieData.title}</MovieTitle>
            )}
            {movieData == null ? null : (
              <MovieContent>{movieData.detail}</MovieContent>
            )}
          </div>
        </MoviePosterData>
        <div style={{ flexDirection: "row" }}>
          <AddCommentInput
            ref={inputRef}
            placeholder={"댓글을 추가해보세요!"}
          />
          <PlusSquareOutlined
            onClick={() => addButton(inputRef)}
            style={{ fontSize: "30px", float: "right", marginRight: "50px" }}
          />
        </div>

        <EditButton />
      </DetailLayout>
    </div>
  );
};

export default Detail;

const OttHeader = styled.div`
  width:100%;
  max-width: 1920px;
  min-width: 800px;
  height: 75px;
  background-color: black;
`;

const HeaderTitle = styled.p`
margin: auto;
  margin-left: 1%;
  margin-top: 7px;
  font-size: 40px;
  color: #e61919;
  display: flex; 
  position: absolute;
  align-items: center;
  cursor: pointer;
`;

const DetailLayout = styled.div`
  width: 800px;
  height: 800px;
  color: white;
  font-weight: bold;
  border: 1px solid;
  border-radius: 7px;
  background-color: #292929;
  display: flex;
  flex-direction: column;
  align-items: left;
  margin: auto;
  margin-top: 20px;
`;

const MoviePosterData = styled.div`
  max-width: 800px;
  min-width: 600px;
  background-color: #686868;
  height: 300px;
  margin: 30px;
  border-radius: 7px;
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
  border-radius: 7px;
`;

const MovieTitle = styled.h2`
  font-size: 40px;
  font-weight: bold;
  width: 450px;
  height: 50px;
  margin-top: 30px;
  margin-left: 35px;
  text-align: center;
`;
const MovieContent = styled.p`
  width: 510px;
  height: 200px;
  margin: auto;
  margin-left: 5px;
  margin-top: 30px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const AddCommentInput = styled.input`
  width: 500px;
  height: 30px;
  color: white;
  font-weight: bold;
  background-color: black;
  border-radius: 6px;
  border: 1px solid white;
  margin-left: 50px;
  margin-bottom: 10px;
  text-align: center;
`;
