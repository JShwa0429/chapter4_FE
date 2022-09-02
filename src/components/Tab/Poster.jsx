import styled from "styled-components";

const Poster = ({ children }) => {
  return <DivPoster>{children}</DivPoster>;
};

const DivPoster = styled.div`
  border: 1px solid black;
  height: 600px;
`;

export default Poster;
