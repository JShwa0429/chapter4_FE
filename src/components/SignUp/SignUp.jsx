import React from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import useInput from '../../hooks/useInput';

const SignUp = () => {
  const navigate = useNavigate();

   // onChangeHandler /useInput
  const [email, setEmail, onChangeEmailHandler] = useInput();
  const [nickName, setNickName, onChangeNicknameHandler] = useInput();
  const [password, setPassword, onChangePasswordHandler] = useInput();
  const [passwordConfirm, setPasswordConfirm, onChangePasswordConfirmHandler] = useInput();


  const onSubmitHandler = (e) => {
    // e.preventDefault();
    if (data.password !== data.confirmPassword) {
      alert('Password mismatch')
    }
   
    dispatch(
      __addUser({
        email,
        nickName,
        password,
        passwordConfirm,
      })
    );

     navigate("/login")
  };

  return (
    <SignUpLayoutBox>
        <SignUpDiv onSubmit={onSubmitHandler}>
          <SignUpTitle>Sign Up</SignUpTitle>

          <SignUpSubTitle>이메일</SignUpSubTitle>
          <SignUpInput
            type="email"
            value={email}
            onChange={onChangeEmailHandler}
            required

          ></SignUpInput>

          <SignUpSubTitle>닉네임</SignUpSubTitle>
          <SignUpInput
            type="text"
            value={nickName}
            onChange={onChangeNicknameHandler}
            required

          ></SignUpInput>

          <SignUpSubTitle>비밀번호</SignUpSubTitle>
          <SignUpInput
            type="password"
            value={password}
            onChange={onChangePasswordHandler}
            required

          ></SignUpInput>

          <SignUpSubTitle>비밀번호 확인</SignUpSubTitle>
          <SignUpInput
            type="password"
            value={passwordConfirm}
            onChange={onChangePasswordConfirmHandler}
            required

          ></SignUpInput>

          <SignUpButton>가입하기</SignUpButton>
          </SignUpDiv>
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
const SignUpDiv = styled.form`
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