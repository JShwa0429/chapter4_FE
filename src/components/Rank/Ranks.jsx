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
  height: 100vh;
  display: grid;
  place-items: center;

  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;

export default Ranks;
