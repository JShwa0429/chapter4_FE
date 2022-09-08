import styled from "styled-components";
import { useNavigate } from "react-router-dom";

<<<<<<< Updated upstream
const Poster = ({ children, id, rank, imgUrl, onClick }) => {
  return (
    <DivPoster id={id} onClick={onClick}>
      <RankDiv id={id}>{rank}위</RankDiv>
      <Img id={id} alt={"포스터"} src={imgUrl} />
      <h1 id={id}>{children}</h1>
=======
const Poster = ({ children, rank, imgUrl,id }) => {
  const navigate = useNavigate();
  console.log(id,children)
  return (
    <DivPoster >
      {rank < 4 && (
        <img
          id={id}
          alt={rank}
          className="rank"
          src={`${process.env.PUBLIC_URL}/images/number${rank}.png`}
        />
      )}
      <Img alt={"포스터"} src={imgUrl}onClick={() => {
            navigate(`/detail/${id}`);
          }}  />
      <h1>{children}</h1>
>>>>>>> Stashed changes
    </DivPoster>
  );
};

const DivPoster = styled.div`
  border: 1px solid black;
  height: 60vh;

  position: relative;
  display: flex;
  flex-direction: column;
  border: 1px solid white;

  img {
    object-fit: contain;
  }

  .rank {
    position: absolute;
  }

  h1 {
    font-size: 32px;
    text-align: center;
    color: white;
  }
`;

const RankDiv = styled.div`
  position: absolute;
  color: white;
  font-size: 32px;
  top: 0;
  left: 0;
  background-color: gold;
  width: 100px;
  text-align: center;
`;

const Img = styled.img`
  object-fit: cover;
  margin: 10px;
  height: 80%;
`;
export default Poster;
