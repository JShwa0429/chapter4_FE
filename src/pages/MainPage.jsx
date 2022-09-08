import { Header, Ranks, Tab, Dots, Search } from "../components";
import styled from "styled-components";
import { useRef, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { __getRankList } from "../redux/modules/rankSlice";

const MainPage = () => {
  const outerRef = useRef();
  const [scrollIndex, setScrollIndex] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(__getRankList());
  }, [dispatch]);
  
  useEffect(() => {
    const wheelHandler = (e) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = outerRef.current;
      const pageHeight = window.innerHeight;
      const DIVIDER_HEIGHT = 5;
      if (deltaY > 0) {
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          outerRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(2);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지

          outerRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(3);
        } else {
          // 현재 3페이지

          outerRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(3);
        }
      } else {
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지

          outerRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(1);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          outerRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(1);
        } else {
          // 현재 3페이지

          outerRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(2);
        }
      }
    };
    const outerRefCurrent = outerRef.current;
    outerRefCurrent.addEventListener("wheel", wheelHandler);
    return () => {
      outerRefCurrent.removeEventListener("wheel", wheelHandler);
    };
  }, []);

  return (
    <DivMainPage>
      <Header />
      <Dots scrollIndex={scrollIndex} />
      <DivOuter ref={outerRef}>
        <DivInner>
          <Tab />
        </DivInner>
        <Divider />
        <DivInner>
          <Ranks />
        </DivInner>
        <Divider />
        <DivInner>
          <Search />
        </DivInner>
      </DivOuter>
    </DivMainPage>
  );
};

const DivMainPage = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const DivOuter = styled.div`
  width: 100vw;
  overflow-y: auto;
  background-color: black;
`;

const DivInner = styled.div`
  max-width: 1200px;
  min-width: 800px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background-color: black;
`;

const Divider = styled.div`
  width: 100%;
  max-height: 5px;
  background-color: black;
`;

export default MainPage;
