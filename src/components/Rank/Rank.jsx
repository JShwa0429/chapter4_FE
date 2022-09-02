import styled from "styled-components";

const Rank = ({ rank, title }) => {
  return (
    <DivRank>
      <p>{rank}위</p>
      <p>{title}</p>
    </DivRank>
  );
};

const DivRank = styled.div`
  border: 1px solid black;
  height: 35px;
  display: flex;
  flex-direction: row;
`;

export default Rank;
