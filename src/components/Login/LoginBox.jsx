import React from 'react';
import styled from 'styled-components';

const LoginBox = () => {
  return (
     <LoginLayoutBox>
      <LoginDiv>
        <LoginTitle>Login</LoginTitle>
        <LoginIdBox>
          <LoginIdinput
            type="email"
            placeholder="아이디"
          ></LoginIdinput>
        </LoginIdBox>
        <LoginPwBox>
          <LoginPwinput
            type="password"
            placeholder="비밀번호"
          ></LoginPwinput>
        </LoginPwBox>
        <LoginButton>
          로그인
        </LoginButton>
        <SocialLoginButton>
          카카오로그인
        </SocialLoginButton>
        <Loginhr />
        <SignupButton>
        회원가입
      </SignupButton>
      </LoginDiv>

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
const LoginDiv = styled.div`
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

const LoginIdinput = styled.input`
  width: 300px;
  height: 35px;
  margin-bottom: 5px;

`
const LoginPwBox = styled.div`
`
const LoginPwinput = styled.input`
  width: 300px;
  height: 35px;
  margin-bottom: 30px;

`

const LoginButton = styled.button`
  border: 1px solid #000;
  width: 300px;
  height: 40px;
  margin-bottom: 5px;
  cursor: pointer;

`
const SocialLoginButton = styled.button`
  border: 1px solid #000;
  width:300px;
  height:40px;
  cursor: pointer;

`
const Loginhr = styled.div`
width:100%;
margin:50px 0 30px 0;
border-bottom: 1px solid #999;
`

const SignupButton = styled.button`
  border:none;
  background-color:#fff;
  width:300px;
  height:40px;
  cursor: pointer;
`

export default LoginBox;