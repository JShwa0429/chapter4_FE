import styled from "styled-components";
import Rank from "./Rank";

const RankCard = ({ data, ott }) => {
  return (
    <CardDiv>
      <img alt={ott} src={`${process.env.PUBLIC_URL}/images/${ott}.png`} />
      {data.map((v) => {
        return <Rank key={v.title} {...v}></Rank>;
      })}
    </CardDiv>
  );
};

const CardDiv = styled.div`
  height: 25vh;
  min-width: 400px;
  img {
    height: 40px;
  }
`;

export default RankCard;
