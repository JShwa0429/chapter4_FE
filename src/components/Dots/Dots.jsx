import Dot from "./Dot";
import styled from "styled-components";

const Dots = ({ scrollIndex }) => {
  return (
    <DivDots>
      <DivFlex>
        <Dot num={1} scrollIndex={scrollIndex}></Dot>
        <Dot num={2} scrollIndex={scrollIndex}></Dot>
        <Dot num={3} scrollIndex={scrollIndex}></Dot>
      </DivFlex>
    </DivDots>
  );
};

const DivDots = styled.div`
  position: fixed;
  top: 50%;
  right: 0%;
`;

const DivFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 20px;
  height: 40px;
`;

export default Dots;
