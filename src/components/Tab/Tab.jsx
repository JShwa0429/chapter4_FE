import { useState } from "react";
import styled from "styled-components";
import TabButton from "./TabButton";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Poster from "./Poster";
import {Link} from "react-router-dom";
const Tab = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <DivTab>
      <ButtonDiv>
        <TabButton onClick={() => setTabIndex(0)}>넷플릭스</TabButton>
        <TabButton onClick={() => setTabIndex(1)}>왓챠</TabButton>
        <TabButton onClick={() => setTabIndex(2)}>티빙</TabButton>
        <Link to="/detail">detail</Link>
      </ButtonDiv>
      {tabIndex === 0 && <p>넷플릭스</p>}
      {tabIndex === 1 && <p>왓챠</p>}
      {tabIndex === 2 && <p>티빙</p>}
      <Slider {...settings}>
        <Poster>
          <h3>1</h3>
        </Poster>
        <Poster>
          <h3>2</h3>
        </Poster>
        <Poster>
          <h3>3</h3>
        </Poster>
        <Poster>
          <h3>4</h3>
        </Poster>
        <Poster>
          <h3>5</h3>
        </Poster>
        <Poster>
          <h3>6</h3>
        </Poster>
        <Poster>
          <h3>7</h3>
        </Poster>
        <Poster>
          <h3>8</h3>
        </Poster>
        <Poster>
          <h3>9</h3>
        </Poster>
        <Poster>
          <h3>10</h3>
        </Poster>
      </Slider>
    </DivTab>
  );
};

const DivTab = styled.div`
  width: 100%;
  height: 300px;
  border: 1px solid black;
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
