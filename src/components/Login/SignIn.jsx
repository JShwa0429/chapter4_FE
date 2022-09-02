import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();

  return (
     <LoginLayoutBox>
      <LoginBox>
        <LoginTitle>Login</LoginTitle>
        <LoginIdBox>
          <LoginEmailinput
            type="email"
            placeholder="이메일"
          ></LoginEmailinput>
        </LoginIdBox>
        <LoginPwBox>
          <LoginPwinput
            type="password"
            placeholder="비밀번호"
          ></LoginPwinput>
        </LoginPwBox>
        <LoginButton  onClick={() => { navigate("/"); }}>
          로그인
        </LoginButton>
        <SocialLoginButton  onClick={() => { navigate("/"); }}>
          카카오로그인
        </SocialLoginButton>
        <Loginhr />
        <LoginSignUpButton onClick={() => { navigate("signUp"); }}>
        회원가입
      </LoginSignUpButton>
      </LoginBox>

    </LoginLayoutBox>
  );
};


const LoginLayoutBox = styled.div`
  width:70%;
  height:100%;
  display:flex;
  justify-content: center;
  align-items: center;
`
const LoginBox = styled.div`
  background-color:#fff;
  width:400px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`
const LoginTitle = styled.div`
font-size: 30px;
font-weight: bold;
margin-bottom: 30px;
`
const LoginIdBox = styled.div`
`

const LoginEmailinput = styled.input`
  width: 300px;
  height: 40px;
  margin-bottom: 5px;
  padding:0 10px;
  font-size: 15px;
`
const LoginPwBox = styled.div`
`
const LoginPwinput = styled.input`
  width: 300px;
  height: 40px;
  margin-bottom: 30px;
  padding:0 10px;
  font-size: 15px;

`

const LoginButton = styled.button`
  width: 300px;
  height: 50px;
  margin-bottom: 5px;
  cursor: pointer;

`
const SocialLoginButton = styled.button`
  width:300px;
  height:50px;
  cursor: pointer;

`
const Loginhr = styled.div`
width:100%;
margin:50px 0 30px 0;
border-bottom: 1px solid #999;
`

const LoginSignUpButton = styled.button`
  border:none;
  background-color:#fff;
  width:300px;
  height:40px;
  cursor: pointer;
`

export default SignIn;