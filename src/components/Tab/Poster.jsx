import styled from "styled-components";

const Poster = ({ children, rank }) => {
  return (
    <DivPoster>
      {rank < 4 && (
        <img
          alt={rank}
          className="rank"
          src={`${process.env.PUBLIC_URL}/images/number${rank}.png`}
        />
      )}
      <Img
        alt={"포스터"}
        src="https://movie-phinf.pstatic.net/20220509_176/1652081912471yhg3N_JPEG/movie_image.jpg"
      />
      <h1>{children}</h1>
    </DivPoster>
  );
};

const DivPoster = styled.div`
  border: 1px solid black;
  height: 600px;
  display: flex;
  flex-direction: column;

  .rank {
    position: absolute;
  }

  h1 {
    font-size: 32px;
    text-align: center;
  }
`;

const Img = styled.img`
  object-fit: cover;
  margin: 10px;
  height: 500px;
`;
export default Poster;
