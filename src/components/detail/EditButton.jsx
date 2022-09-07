import React, { useRef,useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { LikeOutlined, LikeFilled,DislikeFilled,DislikeOutlined } from "@ant-design/icons";

import {
  toggleEditCheck,
  toggleLikeData,
  toggleDistLikeData,
  removeComment,
  saveComment,
  __getCommentList
} from "../../redux/modules/CommentSlice";

const EditButton  = () => {
  const dispatch = useDispatch();
  const commentData = useSelector((state) => state.comment.comment);
  const newCommnetData = useSelector((state) => state.movie.movie);
  const inputRef = useRef(0);

  useEffect(() => {
    dispatch(__getCommentList());
    console.log("렌더링 2번째")
  }, []);

  const toggleDone = (list) => {
    dispatch(toggleEditCheck(list));
  };

  const toggleLike = (list) => {
    dispatch(toggleLikeData(list));
  };

  const toggleDisLike = (list) =>{
    dispatch(toggleDistLikeData(list))
  };

  const save_Remove = (list,inputRef) => {
    if(list.editCheck===1){
      dispatch(saveComment({...list,content:inputRef.current.value}))
    }else{
      dispatch(removeComment(list));
    }
  };

  console.log(commentData)

  return (
    <CommentsLayout>
        {commentData.map((list) => (
          <Comment key={list.id}>
            <CommentContent>
              <div style={{fontSize:"11px"}}>{list.nickName}</div>
              <div style={{ marginTop: "5px", fontSize:"15px",fontWeight:"bold" }}>
                {list.accessToken ? (
                  list.editCheck ? (
                    <ToggleInput ref={inputRef}/>
                  ) : (
                    list.content
                  )
                ) : (
                  list.content
                )}
              </div>
            </CommentContent>
            {list.accessToken ? (
              <div>
                <Button onClick={() => toggleDone(list)}>
                  {list.editCheck ? "취소" : "수정"}
                </Button>
                <Button onClick={() => save_Remove(list,inputRef)}>
                  {list.editCheck ? "저장" : "❌"}
                </Button>
              </div>
            ) : (
              <div style={{display:"flex",flexDirection:"row"}}>
              <LikeCheck>
                {list.editCheck ? (
                  <LikeFilled 
                    style={{ color: "skyblue", fontSize: "25px" }}
                    onClick={() => toggleLike(list)}
                  />
                ) : (
                  <LikeOutlined
                    style={{ color: "skyblue", fontSize: "25px" }}
                    onClick={() => toggleLike(list)}
                  />
                )}
                {list.likes}
              </LikeCheck>
              <LikeCheck>
              {list.dislikeCheck ? (
                  <DislikeFilled 
                    style={{ color: "skyblue", fontSize: "25px" }}
                    onClick={() => toggleDisLike(list)}
                  />
                ) : (
                  <DislikeOutlined
                    style={{ color: "skyblue", fontSize: "25px" }}
                    onClick={() => toggleDisLike(list)}
                  />
                )}
                {list.dislikes}

              </LikeCheck>
              </div>
            )}
          </Comment>
        ))}
      </CommentsLayout>
    
  );
};

export default EditButton;

const CommentsLayout = styled.div`
  width: 735px;
  height: 600px;
  border: 2px solid black;
  margin: auto;
  margin-bottom: 10px;
  text-align: center;
`;

const Comment = styled.div`
  width: 700px;
  height: 60px;
  border: none;
  background-color: #e2e2e2;
  border-radius:20px;
  margin: auto;
  margin-top: 10px;
  padding: 7px;
  text-align: left;
  display: flex;
  flex-direction: row;
  box-shadow: -1px 1px 1px 1px gray;
`;

const ToggleInput = styled.input`
  width: 400px;
  height: 30px;
  border-radius: 10px;
  margin-top: -5px;
`;

const CommentContent = styled.div`
  width: 590px;
  margin:2px;
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

const LikeCheck = styled.div`
width: 33px;
height: 40px;
size:0px;
margin-left: 8px;
  margin-top: 5px;
  text-align: center;
  display: flex;
  flex-direction: column;
  &:hover {
    transform: scale(1.1);
  }
`;
