import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <DivHeader>
      <DivLink>
        <Link to="/login">로그인</Link>
        <Link to="/signUp">회원가입</Link>
      </DivLink>
      <DivTitle>
        <h1> OTT TOP TEN </h1>
      </DivTitle>
    </DivHeader>
  );
};

const DivHeader = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  max-width: 1200px;
  min-width: 800px;
  background-color: white;
`;

const DivLink = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 10em;
  margin-left: auto;
`;

const DivTitle = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 50px;
  text-align: center;

  h1 {
    font-size: 32px;
  }
`;

export default Header;
