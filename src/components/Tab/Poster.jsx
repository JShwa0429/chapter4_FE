import styled from "styled-components";

const Poster = ({ children, id, rank, imgUrl, onClick }) => {
  return (
    <DivPoster id={id} onClick={onClick}>
      <RankDiv id={id}>{rank}위</RankDiv>
      <Img id={id} alt={"포스터"} src={imgUrl} />
      <h1 id={id}>{children}</h1>
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
