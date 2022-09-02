import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { MainPage } from "./pages";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <DivApp>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignUpPage />} />
      </Routes>
    </DivApp>
  );
}

const DivApp = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export default App;
