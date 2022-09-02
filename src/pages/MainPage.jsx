import { Header, Tab } from "../components";
import styled from "styled-components";
const MainPage = () => {
  return (
    <DivMainPage>
      <Header />
      <p>메인 페이지 입니다!</p>
      <Tab />
    </DivMainPage>
  );
};

const DivMainPage = styled.div`
  max-width: 1200px;
  min-width: 800px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default MainPage;
