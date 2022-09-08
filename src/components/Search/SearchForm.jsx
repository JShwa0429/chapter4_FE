import styled from "styled-components";
import { Button } from "../Button";
import { forwardRef } from "react";

const SearchForm = ({ onClick }, ref) => {
  return (
    <Form>
      <input
        type="text"
        ref={ref}
        placehodler="검색어를 입력해주세요(띄어쓰기를 지켜주세요)"
      />
      <Button type="button" onClick={onClick}>
        검색
      </Button>
    </Form>
  );
};

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 20%;
  input {
    width: 700px;
    height: 100px;
    font-size: 3em;
    border-radius: 8px;
    border: 1px solid black;
  }

  button {
    font-size: 3em;
    height: 100px;
  }
`;

export default forwardRef(SearchForm);
