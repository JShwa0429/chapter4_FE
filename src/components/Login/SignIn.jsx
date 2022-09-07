import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { __login } from "../../redux/modules/loginSlice";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // 버튼 잠금 state
  const [formstate, setFromState] = useState(false);
  // data 입력 state
  const [loginData, setloginData] = useState({ email: "", password: "" });

  //input 데이터 저장하기
  const changeInput = (e) => {
    const { value, id } = e.target;
    setloginData({ ...loginData, [id]: value });
  };

  // submit 이벤트
  const submitLogin = async (e) => {
    // 새로고침 막기
    e.preventDefault();
    // 상태 받아오기 (에러로 받아져서 .....)
    const loginState = await dispatch(__login(loginData));
    if (loginState.type === "log/LOGIN_LOG/rejected") {
      alert("아이디 혹은 비밀번호가 틀렸습니다.");
    }
    // 로그인시 환영 인사 후 페이지 이동
    if (loginState.payload) {
      // alert(`${loginState.payload.nickName} 님 환영합니다 :) `);
      navigate("/");
    }
  };

  React.useEffect(() => {
    // 로그인 버튼 잠금
    if (loginData.email !== "" && loginData.password !== "") {
      setFromState(true);
    } else {
      setFromState(false);
    }
  }, [loginData]);

  return (
    <LoginLayoutBox>
      <LoginBox onSubmit={submitLogin}>
        <LoginTitle>Login</LoginTitle>
        <LoginIdBox>
          <LoginEmailinput
            id="email"
            type="email"
            onChange={changeInput}
            placeholder="이메일"
            required
          ></LoginEmailinput>
        </LoginIdBox>
        <LoginPwBox>
          <LoginPwinput
            id="password"
            type="password"
            onChange={changeInput}
            placeholder="비밀번호"
            required
          ></LoginPwinput>
        </LoginPwBox>
        <LoginButton
          type="submit"
          // size="size1"
          bgcolor={formstate ? "blue" : "grey"}
          color={formstate ? "white" : "black"}
          disabled={!formstate}
        >
          로그인
        </LoginButton>
        <SocialLoginButton
          onClick={() => {
            navigate("/");
          }}
        >
          카카오로그인
        </SocialLoginButton>
        <Loginhr />
        <LoginSignUpButton
          onClick={() => {
            navigate("/signup");
          }}
        >
          회원가입
        </LoginSignUpButton>
      </LoginBox>
    </LoginLayoutBox>
  );
};

const LoginLayoutBox = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LoginBox = styled.form`
  background-color: #fff;
  width: 400px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const LoginTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 30px;
`;
const LoginIdBox = styled.div``;

const LoginEmailinput = styled.input`
  width: 300px;
  height: 40px;
  margin-bottom: 5px;
  padding: 0 10px;
  font-size: 15px;
`;
const LoginPwBox = styled.div``;
const LoginPwinput = styled.input`
  width: 300px;
  height: 40px;
  margin-bottom: 30px;
  padding: 0 10px;
  font-size: 15px;
`;

const LoginButton = styled.button`
  width: 300px;
  height: 50px;
  margin-bottom: 5px;
  cursor: pointer;
`;
const SocialLoginButton = styled.button`
  width: 300px;
  height: 50px;
  cursor: pointer;
`;
const Loginhr = styled.div`
  width: 100%;
  margin: 50px 0 30px 0;
  border-bottom: 1px solid #999;
`;

const LoginSignUpButton = styled.button`
  border: none;
  background-color: #fff;
  width: 300px;
  height: 40px;
  cursor: pointer;
`;

export default SignIn;
