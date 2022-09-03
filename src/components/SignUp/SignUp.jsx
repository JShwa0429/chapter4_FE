import React from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [nickName, setNickName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  // onChangeHandler
  const onEmailHandler = (event) => {
    setEmail(event.target.value);
  };
   const onNameHandler = (event) => {
    setNickName(event.target.value);
  };
   const onPasswordHandler = (event) => {
    setPassword(event.target.value);
  };
   const onPasswordConfirmHandler = (event) => {
    setPasswordConfirm(event.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

  };

  return (
    <SignUpLayoutBox>
      <form onSubmit={onSubmitHandler}>
        <SignUpDiv>
          <SignUpTitle>Sign Up</SignUpTitle>

          <SignUpSubTitle>이메일</SignUpSubTitle>
          <SignUpInput
            type="email"
            value={email}
            onChange={onEmailHandler}
            required

          ></SignUpInput>

          <SignUpSubTitle>닉네임</SignUpSubTitle>
          <SignUpInput
            type="text"
            value={nickName}
            onChange={onNameHandler}
            required

          ></SignUpInput>

          <SignUpSubTitle>비밀번호</SignUpSubTitle>
          <SignUpInput
            type="password"
            value={password}
            onChange={onPasswordHandler}
            required

          ></SignUpInput>

          <SignUpSubTitle>비밀번호 확인</SignUpSubTitle>
          <SignUpInput
            type="password"
            value={passwordConfirm}
            onChange={onPasswordConfirmHandler}
            required

          ></SignUpInput>

          <SignUpButton onClick={() => { navigate("/login"); }}>가입하기</SignUpButton>
          </SignUpDiv>
        </form>
      </SignUpLayoutBox>
  );
};

const SignUpLayoutBox = styled.div`
  width:70%;
  height:100%;
  display:flex;
  justify-content: center;
  align-items: center;
`
const SignUpDiv = styled.div`
  width:300px;
  overflow:hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const SignUpTitle = styled.div`
font-size: 30px;
font-weight: bold;
margin: 0 auto 30px;
`
const SignUpSubTitle = styled.div`
  display: flex;

`
const SignUpInput = styled.input`
  width: 300px;
  height: 40px;
  margin: 10px 0;
  padding:0 10px;
  font-size: 15px;
`
const SignUpButton = styled.button`
  width: 300px;
  height: 50px;
  cursor: pointer;
  margin-top:30px;
`
export default SignUp;