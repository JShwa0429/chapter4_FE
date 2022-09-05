import styled from "styled-components";

const SearchResult = ({ data }) => {
  // // {
  //     title: "The Amazing Spider-Man 2",
  //     imgUrl:
  //       "https://image.tmdb.org/t/p/original/c3e9e18SSlvFd1cQaGmUj5tqL5P.jpg",
  //     providers: ["Netflix", "Disney Plus"],
  //   },
  return (
    <DivResult>
      {data.map((v) => {
        return (
          <DivData>
            <h1>{v.title}</h1>
            <img src={v.imgUrl} alt="포스터" />
            <div>
              제공자:
              {v.providers.map((v) => (
                <p key={`제공자${v}`}>{v}</p>
              ))}
            </div>
          </DivData>
        );
      })}
    </DivResult>
  );
};

const DivResult = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;

const DivData = styled.div`
  width: 200px;
  height: 300px;
  border: 1px solid black;

  h1 {
    font-weight: bold;
    text-align: center;
  }
  img {
    width: 200px;
    object-fit: cover;
  }
`;

export default SearchResult;
