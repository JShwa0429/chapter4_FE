import styled from "styled-components";

const Rank = ({ children }) => {
  return <DivRank>{children}</DivRank>;
};

const DivRank = styled.div`
  border: 1px solid black;
  height: 35px;
`;

export default Rank;
