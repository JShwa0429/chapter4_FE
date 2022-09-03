import { Header, Ranks, Tab, Dots } from "../components";
import styled from "styled-components";
import { useRef, useEffect, useState } from "react";

const MainPage = () => {
  const outerRef = useRef();
  const [scrollIndex, setScrollIndex] = useState(1);

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
          console.log("현재 1페이지, down");
          outerRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(2);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          console.log("현재 2페이지, down");
          outerRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(3);
        } else {
          // 현재 3페이지
          console.log("현재 3페이지, down");
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
          console.log("현재 1페이지, up");
          outerRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(1);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          console.log("현재 2페이지, up");
          outerRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(1);
        } else {
          // 현재 3페이지
          console.log("현재 3페이지, up");
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
      </DivOuter>
    </DivMainPage>
  );
};

const DivMainPage = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const DivOuter = styled.div`
  width: 100vw;
  height: 200vh;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const DivInner = styled.div`
  max-width: 1200px;
  min-width: 800px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const Divider = styled.div`
  width: 100%;
  height: 5px;
  background-color: gray;
`;

export default MainPage;
