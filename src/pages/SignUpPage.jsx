import React from 'react';
import SignUp from '../components/SignUp/SignUp';
import LoginHeader from '../components/Header/LoginHeader';
import styled from 'styled-components';

const SignUpPage = () => {
  return (
    <SignUpPageBox>
      <LoginHeader />
      <SignUp/>
    </SignUpPageBox>
  );
};

const SignUpPageBox = styled.div`
  width:100%;
  height:100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export default SignUpPage;