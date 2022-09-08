import styled, { withTheme } from "styled-components";
import Rank from "./Rank";

const RankCard = ({ data, ott }) => {
  return (
    <CardDiv>
      <img alt={ott} src={`${process.env.PUBLIC_URL}/images/${ott}.png`} />
      <DataDiv>
        {data
          .filter((v) => v.platform === ott)
          .map((v) => {
            return <Rank key={v.title} {...v}></Rank>;
          })}
      </DataDiv>
    </CardDiv>
  );
};

const CardDiv = styled.div`
  min-width: 400px;
  height: 100px;
  img {
    height: 40px;
  }
`;

const DataDiv = styled.div`
  border: 1px solid white;
`;

export default RankCard;
