// import React from 'react';
// import styled from 'styled-components';
// import { useNavigate } from "react-router-dom";
// import useInput from '../../hooks/useInput';

// const SignUp = () => {
//   const navigate = useNavigate();

//    // onChangeHandler /useInput
//   const [email, setEmail, onChangeEmailHandler] = useInput();
//   const [nickName, setNickName, onChangeNicknameHandler] = useInput();
//   const [password, setPassword, onChangePasswordHandler] = useInput();
//   const [passwordConfirm, setPasswordConfirm, onChangePasswordConfirmHandler] = useInput();

//   const onSubmitHandler = (e) => {
//     // e.preventDefault();
//     if (data.password !== data.confirmPassword) {
//       alert('Password mismatch')
//     }

//     dispatch(
//       __addUser({
//         email,
//         nickName,
//         password,
//         passwordConfirm,
//       })
//     );

//      navigate("/login")
//   };

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

//모듈
import {
  changeCheckName,
  changeCheckNick,
  __checkNickname,
  __checkUsername,
  __signup,
} from "../../redux/modules/signupSlice";

//회원가입 form 컴포넌트
export default function SignUpForm() {
  // 이름 중복확인 상태 값 가져오기 기본 값 false
  const checkName = useSelector((state) => state.signup.checkName);
  // 닉네임 중복확인 상태 값 가져오기 기본 값 false
  const checkNick = useSelector((state) => state.signup.checkNick);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // 버튼 활성화 상태
  // const [formstate, setFromState] = useState(false);
  // 보낼 데이터 상태관리
  const [signData, setsignData] = useState({
    email: "",
    nickName: "",
    password: "",
    passwordConfirm: "",
  });

  // 이메일, 닉네임, 비밀번호 조건 통과 상태
  // const email = checkName;
  // const nick = checkNick;
  const [pw, setPw] = useState(false);

  //input 데이터 저장하기
  const changeInput = (e) => {
    const { value, id } = e.target;
    setsignData({ ...signData, [id]: value });
    // 중복 확인 후 데이터 변경시 상태 false로 변환하는 action 실행
    if (id === "email") dispatch(changeCheckName());
    if (id === "nickName") dispatch(changeCheckNick());
  };

  // 회원가입 이벤트
  const submitLogin = async (e) => {
    e.preventDefault();
    // 회원가입 성공시 로그인 페이지 이동
    const checkState = await dispatch(__signup(signData));
    if (checkState.payload) {
      navigate("/login");
    }
  };

  // 중복확인 이벤트
  // const CheckId = () => {
  //   dispatch(__checkUsername(signData.email));
  // };
  // const CheckNick = () => {
  //   dispatch(__checkNickname(signData.nickName));
  // };

  React.useEffect(() => {
    // 비밀번호 일치 조건 확인
    if (
      signData.passwordCheck === signData.password &&
      signData.password !== ""
    ) {
      setPw(true);
    } else {
      setPw(false);
    }
  }, [signData]);

  // React.useEffect(() => {
  //   // 3개 조건 확인 후 버튼 활성화
  //   if (email && nick && pw) {
  //     setFromState(true);
  //   } else {
  //     setFromState(false);
  //   }
  // }, [email, nick, pw]);

  return (
    <SignUpLayoutBox>
      <SignUpDiv onSubmit={submitLogin}>
        <SignUpTitle>Sign Up</SignUpTitle>

        <SignUpSubTitle>
          이메일
          {/* <CheckText color={email ? "blue" : "red"}>
              {email ? "중복 확인" : "중복 확인을 해주세요"}
          </CheckText>
             <CheckBtn onClick={CheckId}>중복 확인</CheckBtn> */}
        </SignUpSubTitle>
        <SignUpInput
          type="email"
          id="email"
          onChange={changeInput}
          required
        ></SignUpInput>

        <SignUpSubTitle>
          닉네임
          {/* <CheckText color={nick ? "blue" : "red"}>
              {nick ? "중복 확인" : "중복 확인을 해주세요"}
          </CheckText>
           <CheckBtn onClick={CheckNick}>중복 확인</CheckBtn> */}
        </SignUpSubTitle>
        <SignUpInput
          type="text"
          id="nickName"
          onChange={changeInput}
          required
        ></SignUpInput>

        <SignUpSubTitle>비밀번호</SignUpSubTitle>
        <SignUpInput
          type="password"
          id="password"
          onChange={changeInput}
          required
        ></SignUpInput>

        <SignUpSubTitle>
          비밀번호 확인
          {/* <CheckText color={pw ? "blue" : "red"}>
            {pw ? "비밀 번호가 일치합니다" : "비밀 번호가 일치하지 않습니다"} */}
          {/* </CheckText> */}
        </SignUpSubTitle>
        <SignUpInput
          id="passwordConfirm"
          type="password"
          onChange={changeInput}
          required
        ></SignUpInput>

        <SignUpButton
        // type="submit"
        // bgcolor={formstate ? "blue" : "grey"}
        // color={formstate ? "white" : "black"}
        // disabled={!formstate}
        // onClick={CheckNick}
        >
          가입하기
        </SignUpButton>
      </SignUpDiv>
    </SignUpLayoutBox>
  );
}

const SignUpLayoutBox = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SignUpDiv = styled.form`
  width: 300px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const SignUpTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin: 0 auto 30px;
`;
const SignUpSubTitle = styled.div`
  display: flex;
`;
const SignUpInput = styled.input`
  width: 300px;
  height: 40px;
  margin: 10px 0;
  padding: 0 10px;
  font-size: 15px;
`;
const SignUpButton = styled.button`
  width: 300px;
  height: 50px;
  cursor: pointer;
  margin-top: 30px;
`;

const CheckBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 30px;
  float: right;
  border-radius: 10px;
  background-color: var(--grey);
  cursor: pointer;
  font-size: 13px;
`;

const CheckText = styled.span`
  margin-left: 20px;
  color: ${({ color }) => color};
  font-size: 10px;
`;
// export default SignUp;

//   return (
//     <WrapForm onSubmit={submitLogin}>
//       <WrapInputLabel>
//         <div>
//           <span>
//             아이디(e-mail)
//             <CheckText color={email ? "blue" : "red"}>
//               {email ? "중복 확인" : "중복 확인을 해주세요"}
//             </CheckText>
//           </span>

//           <CheckBtn onClick={CheckId}>중복 확인</CheckBtn>
//         </div>
//         <Input
//           id="email"
//           type="email"
//           placeholder="이메일 주소를 입력해주세요"
//           required
//           onChange={changeInput}
//         />
//       </WrapInputLabel>
//       <WrapInputLabel>
//         <div>
//           <span>
//             닉네임
//             <CheckText color={nick ? "blue" : "red"}>
//               {nick ? "중복 확인" : "중복 확인을 해주세요"}
//             </CheckText>
//           </span>

//           <CheckBtn onClick={CheckNick}>중복 확인</CheckBtn>
//         </div>
//         <Input
//           id="nickname"
//           placeholder="닉네임을 입력해주세요"
//           required
//           onChange={changeInput}
//         />
//       </WrapInputLabel>
//       <WrapInputLabel>
//         <span>비밀번호</span>
//         <Input
//           id="password"
//           type="password"
//           placeholder="비밀번호를 입력해주세요"
//           required
//           onChange={changeInput}
//         />
//       </WrapInputLabel>
//       <WrapInputLabel>
//         <span>
//           비밀번호 확인
//           <CheckText color={pw ? "blue" : "red"}>
//             {pw ? "비밀 번호가 일치합니다" : "비밀 번호가 일치하지 않습니다"}
//           </CheckText>
//         </span>

//         <Input
//           id="passwordCheck"
//           type="password"
//           placeholder="비밀번호를 한번 더 입력해주세요"
//           required
//           onChange={changeInput}
//         />
//       </WrapInputLabel>
//       <Button
//         type="submit"
//         size="size1"
//         bgcolor={formstate ? "blue" : "grey"}
//         color={formstate ? "white" : "black"}
//         disabled={!formstate}
//       >
//         회원가입 완료
//       </Button>
//     </WrapForm>
//   );
// }

// const WrapForm = styled.form`
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
// `;
// const WrapInputLabel = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
//   text-align: left;
// `;

// const CheckBtn = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 80px;
//   height: 30px;
//   float: right;
//   border-radius: 10px;
//   background-color: var(--grey);
//   cursor: pointer;
//   font-size: 13px;
// `;

// const CheckText = styled.span`
//   margin-left: 20px;
//   color: ${({ color }) => color};
//   font-size: 10px;
// `;

// const Input = styled.input`

// `
// const Button = styled.button`

// `
