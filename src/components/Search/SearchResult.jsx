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
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <DivResult>
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
                      src={`${process.env.PUBLIC_URL}/images/${provider}.png`}
                      key={`제공자${idx}`}
                    />
                  </Logo>
                ))}
              </div>
            </DivData>
          );
        })}
      </Slider>
    </DivResult>
  );
};

const DivResult = styled.div`
  width: 900px;

  .slick-prev:before {
    opacity: 1; // 기존에 숨어있던 화살표 버튼이 보이게
    color: black; // 버튼 색은 검은색으로
    left: 0;
  }
  .slick-next:before {
    opacity: 1;
    color: black;
  }
`;

const DivData = styled.div`
  border: 1px solid black;
  height: max-content;

  object-fit: cover;
  display: flex;
  flex-direction: column;

  h3 {
    font-weight: bold;
    text-align: center;
  }

  img {
    width: 100%;
    object-fit: contain;
  }
`;

const DivTitle = styled.div`
  width: 100%;
  height: 50px;
  font-size: 1.5em;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.div`
  height: 64px;
  display: flex;
  flex-direction: row;
  float: left;

  img {
    width: 64px;
    height: 64px;
    object-fit: contain;
  }
`;

export default SearchResult;
