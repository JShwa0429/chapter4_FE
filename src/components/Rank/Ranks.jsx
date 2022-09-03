import { useState } from "react";
import styled from "styled-components";
import RankCard from "./RankCard";

const Ranks = () => {
  const [datas] = useState([
    [
      { rank: 1, title: "1제목1" },
      { rank: 2, title: "1제목2" },
      { rank: 3, title: "1제목3" },
      { rank: 4, title: "1제목4" },
      { rank: 5, title: "1제목5" },
      { rank: 6, title: "1제목6" },
      { rank: 7, title: "1제목7" },
      { rank: 8, title: "1제목8" },
      { rank: 9, title: "1제목9" },
      { rank: 10, title: "1제목10" },
    ],
    [
      { rank: 1, title: "2제목1" },
      { rank: 2, title: "2제목2" },
      { rank: 3, title: "2제목3" },
      { rank: 4, title: "2제목4" },
      { rank: 5, title: "2제목5" },
      { rank: 6, title: "2제목6" },
      { rank: 7, title: "2제목7" },
      { rank: 8, title: "2제목8" },
      { rank: 9, title: "2제목9" },
      { rank: 10, title: "2제목10" },
    ],
    [
      { rank: 1, title: "3제목1" },
      { rank: 2, title: "3제목2" },
      { rank: 3, title: "3제목3" },
      { rank: 4, title: "3제목4" },
      { rank: 5, title: "3제목5" },
      { rank: 6, title: "3제목6" },
      { rank: 7, title: "3제목7" },
      { rank: 8, title: "3제목8" },
      { rank: 9, title: "3제목9" },
      { rank: 10, title: "3제목10" },
    ],
    [
      { rank: 1, title: "4제목1" },
      { rank: 2, title: "4제목2" },
      { rank: 3, title: "4제목3" },
      { rank: 4, title: "4제목4" },
      { rank: 5, title: "4제목5" },
      { rank: 6, title: "4제목6" },
      { rank: 7, title: "4제목7" },
      { rank: 8, title: "4제목8" },
      { rank: 9, title: "4제목9" },
      { rank: 10, title: "4제목10" },
    ],
  ]);

  const ott = ["넷플릭스", "왓챠", "티빙", "디즈니플러스"];
  return (
    <DivRanks>
      {datas.map((data, i) => (
        <RankCard key={`Rank${i}`} data={data} ott={ott[i]} />
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
