import React from 'react';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

const LoginHeader = () => {
  const navigate = useNavigate();
  
  return (
    <LoginHeaderBox>
      <LoginHeaderTitle onClick={() => { navigate("/"); }}>OTT TOP TEN</LoginHeaderTitle>
    </LoginHeaderBox>
  );
};

const LoginHeaderBox =styled.div`
  background-color:#555;
  width: 30%;
  height: 100%;
  display:flex;
  justify-content: center;
  align-items: center;
`
const LoginHeaderTitle = styled.div`
font-size:50px;
font-weight:bold;
cursor: pointer;
`

export default LoginHeader;