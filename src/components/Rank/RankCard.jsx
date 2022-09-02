import styled from "styled-components";
import Rank from "./Rank";

const RankCard = ({ data, ott }) => {
  return (
    <CardDiv>
      <h1>{ott}</h1>
      {data.map((v) => {
        return <Rank {...v}></Rank>;
      })}
    </CardDiv>
  );
};

const CardDiv = styled.div`
  width: 400px;
  height: 360px;
`;

export default RankCard;
