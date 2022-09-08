import styled from "styled-components";

const Rank = ({ rank, title }) => {
  return (
    <DivRank>
      <p className="rank">{rank}위</p>
      <p className="title">{title}</p>
    </DivRank>
  );
};

const DivRank = styled.div`
  border: 1px solid black;
  height: 5vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .rank {
    width: 10%;
    text-align: center;
  }

  p {
    color: white;
  }
  .title {
    width: 70%;
    font-weight: bold;
  }
`;

export default Rank;
