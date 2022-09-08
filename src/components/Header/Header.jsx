import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const logout = () => {
    window.localStorage.removeItem("refresh-token");
    navigator("/");
  };

  return (
    <DivHeader>
      <DivLink>
        {localStorage.length ? (
          <Link
            to="/"
            onClick={() => {
              logout();
            }}
          >
            로그아웃
          </Link>
        ) : (
          <Link to="/login">로그인</Link>
        )}
        <Link to="/signUp">회원가입</Link>
      </DivLink>
      <DivTitle>
        <h1> OTT TOP FIVE </h1>
      </DivTitle>
    </DivHeader>
  );
};

const DivHeader = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 99;
  max-width: 1200px;
  min-width: 800px;
  background-color: black;
`;

const DivLink = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 10em;
  margin-left: auto;
  a {
    text-decoration: none;
    color: white;
  }
`;

const DivTitle = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 50px;
  text-align: center;
  background-color: black;
  color: red;

  h1 {
    font-size: 32px;
  }
`;

export default Header;
