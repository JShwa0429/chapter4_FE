import styled from "styled-components";

const Dot = ({ num, scrollIndex }) => {
  return <DivDot num={num} scrollIndex={scrollIndex} />;
};

const DivDot = styled.div`
  width: 10px;
  height: 10px;
  border: 1px solid black;
  border-radius: 999;
  background-color: ${({ scrollIndex, num }) =>
    scrollIndex === num ? "black" : "transparent"};
  transition-duration: 1000;
  transition: "background-color 0.5s";
`;

export default Dot;
