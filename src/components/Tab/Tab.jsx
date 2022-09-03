import { useState } from "react";
import styled from "styled-components";
import TabButton from "./TabButton";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Poster from "./Poster";
import { Link } from "react-router-dom";

const Tab = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };
  const tabArray = ["넷플릭스", "왓챠", "티빙", "디즈니플러스"];
  const array = [...Array(10)].map((v, i) => i + 1);
  return (
    <DivTab>
      <ButtonDiv>
        {tabArray.map((v, index) => (
          <TabButton key={`Tab${index}`} onClick={() => setTabIndex(index)}>
            {v}
          </TabButton>
        ))}
        <Link to="/detail">detail</Link>
      </ButtonDiv>

      {tabArray.map((tab, index) =>
        tabIndex === index ? (
          <Slider key={tabIndex} {...settings}>
            {array.map((value, idx) => (
              <Poster key={`${Poster}${idx}`} rank={value}>
                {tab}
                {value}위
              </Poster>
            ))}
          </Slider>
        ) : (
          ""
        )
      )}
    </DivTab>
  );
};

const DivTab = styled.div`
  width: 1080px;
  height: max-content;

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

const ButtonDiv = styled.div`
  button {
    width: 150px;
    height: 30px;
    border: 1px solid black;
    border-radius: 0;
  }
`;

export default Tab;
