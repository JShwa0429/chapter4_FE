import styled from "styled-components";
import { Button } from "../Button";
import { forwardRef } from "react";

const SearchForm = ({ onClick }, ref) => {
  return (
    <Form>
      <input type="text" ref={ref} placehodler="검색어를 입력해주세요" />
      <Button type="button" onClick={onClick}>
        검색
      </Button>
    </Form>
  );
};

const Form = styled.form`
  width: 100%;
  input {
    width: 700px;
    height: 100px;
    font-size: 3em;
  }

  button {
    font-size: 3em;
    height: 100px;
  }
`;

export default forwardRef(SearchForm);
