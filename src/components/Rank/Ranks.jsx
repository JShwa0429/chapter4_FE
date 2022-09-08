import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import RankCard from "./RankCard";

const Ranks = () => {
  const rank = useSelector((state) => state.rank.rank);

  const otts = ["NETFLIX", "WATCHA", "TVING", "DISNEY +"];
  return (
    <DivRanks>
      {otts.map((ott, i) => (
        <RankCard key={`Rank${i}`} data={rank} ott={ott} />
      ))}
    </DivRanks>
  );
};

const DivRanks = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(2, 600px);
  grid-template-rows: repeat(2, 400px);
`;

export default Ranks;
