import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SearchResult = ({ data }) => {
  // // {
  //     title: "The Amazing Spider-Man 2",
  //     imgUrl:
  //       "https://image.tmdb.org/t/p/original/c3e9e18SSlvFd1cQaGmUj5tqL5P.jpg",
  //     providers: ["Netflix", "Disney Plus"],
  //   },
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  return (
    <DivResult>
      {data.length > 1 && (
        <Slider {...settings}>
          {data.map((v, idx) => {
            return (
              <DivData key={`${idx}번째 영화`}>
                <DivTitle>{v.title}</DivTitle>
                <img src={v.imgUrl} alt="포스터" />
                <div>
                  {v.providers.map((provider, idx) => (
                    <Logo>
                      <img
                        alt={provider}
                        src={`${
                          process.env.PUBLIC_URL
                        }/images/${provider.toUpperCase()}.png`}
                        key={`제공자${idx}`}
                      />
                    </Logo>
                  ))}
                </div>
              </DivData>
            );
          })}
        </Slider>
      )}
      {data.length === 1 &&
        data.map((v, idx) => {
          return (
            <DivData key={`${idx}번째 영화`}>
              <DivTitle>{v.title}</DivTitle>
              <img src={v.imgUrl} alt="포스터" />
              <div style={{ margin: "0 auto" }}>
                {v.providers.map((provider, idx) => (
                  <Logo>
                    <img
                      alt={provider}
                      src={`${
                        process.env.PUBLIC_URL
                      }/images/${provider.toUpperCase()}.png`}
                      key={`제공자${idx}`}
                    />
                  </Logo>
                ))}
              </div>
            </DivData>
          );
        })}
      {data.length < 1 && <h1>검색 결과가 없습니다.</h1>}
    </DivResult>
  );
};

const DivResult = styled.div`
  width: 90vw;

  .slick-prev:before {
    opacity: 1; // 기존에 숨어있던 화살표 버튼이 보이게
    color: white; // 버튼 색은 검은색으로
    left: 0;
  }
  .slick-next:before {
    opacity: 1;
    color: white;
  }

  h1 {
    color: white;
    text-align: center;
    margin-top: 15vh;
  }
`;

const DivData = styled.div`
  border: 1px solid black;
  height: max-content;

  object-fit: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h3 {
    font-weight: bold;
    text-align: center;
  }

  img {
    height: 45vh;
    object-fit: contain;
    margin: 0 auto;
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

const DivTitle = styled.div`
  width: 100%;
  height: 3em;
  font-size: 14px;
  text-align: center;
  display: flex;
  justify-content: center;
  color: white;
`;

const Logo = styled.div`
  height: 64px;
  display: flex;
  flex-direction: row;
  float: left;

  img {
    width: 48px;
    height: 48px;
    object-fit: contain;
  }
`;

export default SearchResult;
