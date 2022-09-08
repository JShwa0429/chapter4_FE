import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { api } from "../../shared/api";
import { useDispatch, useSelector } from "react-redux";
import {
  LikeOutlined,
  LikeFilled,
  DislikeFilled,
  DislikeOutlined,
} from "@ant-design/icons";

import {
  toggleEditCheck,
  toggleLikeData,
  toggleDistLikeData,
  removeComment,
  saveComment,
  //-----------------------
  __removeComment,
  __getCommentList,
  __saveComment,
} from "../../redux/modules/CommentSlice";

const EditButton = () => {
  const dispatch = useDispatch();
  const commentData = useSelector((state) => state.comment.comment);
  const [data, setData] = useState([]);
  const [addData, setAddData] = useState(data);
  const inputRef = useRef(0);

  const getDatas = async () => {
    await api.get("api/movie/1").then((res) => setData(res.data.data.comments));
  };

  useEffect(() => {
    getDatas();
  }, []);

  useEffect(() => {
    const editCheck = data.map((list) => {
      return { ...list, editCheck: false };
    });
    setAddData(editCheck);
  }, [data]);

  const toggleDone = (list) => {
    const editCheck = addData.map((data) =>
      data.id == list.id ? { ...data, editCheck: !data.editCheck } : data
    );
    setAddData(editCheck);
    dispatch(toggleEditCheck(list));
  };

  const toggleLike = (list) => {
    dispatch(toggleLikeData(list));
  };

  const toggleDisLike = (list) => {
    dispatch(toggleDistLikeData(list));
  };

  const save_Remove = (list, inputRef) => {
    if (list.editCheck === true) {
      const editCheck = addData.map((data) =>
        data.id == list.id
          ? {
              ...data,
              content: inputRef.current.value,
              editCheck: !data.editCheck,
            }
          : data
      );
      setAddData(editCheck);
      dispatch(__saveComment({ ...list, content: inputRef.current.value }));
    } else {
      if (window.confirm("정말 삭제합니까?") == true) {
        const editCheck = addData.filter((data) => data.id !== list.id);
        setAddData(editCheck);
        dispatch(__removeComment(list));
      } else {
        return null;
      }
    }
  };

  return (
    <CommentsLayout>
      <p style={{fontSize:"25px",marginLeft:"20px"}}>댓글</p>
      {addData.map((list) => (
        <Comment key={list.id}>
          <CommentContent>
            <div style={{ fontSize: "11px" }}>{list.user.nickName}</div>
            <div
              style={{ marginTop: "5px", fontSize: "15px", fontWeight: "bold" }}
            >
              {list.user.email ? (
                list.editCheck ? (
                  <ToggleInput ref={inputRef} />
                ) : (
                  list.content
                )
              ) : (
                list.content
              )}
            </div>
          </CommentContent>
          {list.user.email ? (
            <div>
              <Button onClick={() => toggleDone(list)}>
                {list.editCheck ? "취소" : "수정"}
              </Button>
              <Button onClick={() => save_Remove(list, inputRef)}>
                {list.editCheck ? "저장" : "삭제"}
              </Button>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "row" }}>
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
  background-color: #292929;
  border: none;
  border-radius: 7px;
  margin: auto;
  margin-bottom: 10px;
`;

const Comment = styled.div`
  width: 700px;
  height: 60px;
  border: none;
  background-color: #686868;
  color:white;
  border-radius: 7px;
  margin: auto;
  margin-top: 10px;
  padding: 7px;
  text-align: left;
  display: flex;
  flex-direction: row;
  box-shadow: 0.5px 0.5px white;
`;

const ToggleInput = styled.input`
  width: 400px;
  height: 30px;
  color:white;
  opacity:0.8;
  background-color:black;
  border: 1px solid black;
  border-radius: 5px;
  margin-top: -5px;
`;

const CommentContent = styled.div`
  width: 590px;
  margin: 2px;
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  width: 40px;
  height: 30px;
  font-weight:bold;
  margin-left: 5px;
  margin-top: 8px;
  align-items: center;
  border: none;
  border-radius: 7px;
  &:hover {
    transform: scale(1.1);
  }
`;

const LikeCheck = styled.div`
  width: 33px;
  height: 40px;
  size: 0px;
  margin-left: 8px;
  margin-top: 5px;
  text-align: center;
  display: flex;
  flex-direction: column;
  &:hover {
    transform: scale(1.1);
  }
`;
