import { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Poster from "./Poster";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

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
  const tabArray = ["NETFLIX", "WATCHA", "TVING", "DISNEY +"];
  const array = [...Array(5)].map((v, i) => i + 1);

  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const getDatas = async () => {
      await axios
        .get("http://3.39.231.71/api/movie")
        .then((res) => setDatas(res.data.data));
    };
    getDatas();
  }, []);

  useEffect(() => {
    console.log("데이터", datas);
  }, [datas]);

  const navigate = useNavigate();

  return (
    <DivTab>
      <ButtonDiv>
        {tabArray.map((v, index) => (
          <Button
            key={`Tab${index}`}
            className={index === tabIndex ? "active" : ""}
            onClick={() => setTabIndex(index)}
          >
            {v}
          </Button>
        ))}
        <Link to="/detail">detail</Link>
      </ButtonDiv>

      {tabArray.map((tab, index) =>
        tabIndex === index ? (
          <Slider {...settings} key={tabIndex}>
            {datas
              .filter((v) => v.platform === tab)
              .map((value, idx) => (
                <Poster
                  key={`${Poster}${idx}`}
                  rank={value.rank}
                  imgUrl={value.imgUrl}
                  onClick={() => navigate(value.id)}
                >
                  {value.title}
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

    border-radius: 0;
  }

  .active {
    background-color: black;
    color: red;
  }
`;

export default Tab;
