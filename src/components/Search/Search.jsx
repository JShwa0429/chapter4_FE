import axios from "axios";
import { useEffect } from "react";
import { useRef, useState } from "react";
import styled from "styled-components";
import SearchForm from "./SearchForm";
import SearchResult from "./SearchResult";

const Search = () => {
  const searchRef = useRef();
  const [datas, setDatas] = useState(null);
  const handleSearch = (e) => {
    const contentName = searchRef.current.value;
    console.log(contentName);
    axios
      .get(
        `http://3.39.231.71/api/auth/movie/search?contentName=${contentName}`
      )
      .then((res) => setDatas(res.data))
      .catch(() =>
        setDatas({
          success: true,
          data: [
            {
              title: "Spider-Man: Far from Home",
              imgUrl:
                "https://image.tmdb.org/t/p/original/4q2NNj4S5dG2RLF9CpXsej7yXl.jpg",
              providers: ["Disney Plus"],
            },
            {
              title: "Spider-Man 3",
              imgUrl:
                "https://image.tmdb.org/t/p/original/fUZyFTovKMauA1zq9xDe6dmidRv.jpg",
              providers: ["Netflix"],
            },
            {
              title: "Spider-Man: No Way Home",
              imgUrl:
                "https://image.tmdb.org/t/p/original/uJYYizSuA9Y3DCs0qS4qWvHfZg4.jpg",
              providers: ["Netflix"],
            },
            {
              title: "Spider-Man: Homecoming",
              imgUrl:
                "https://image.tmdb.org/t/p/original/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg",
              providers: ["Watcha", "Disney Plus"],
            },
            {
              title: "Spider-Man",
              imgUrl:
                "https://image.tmdb.org/t/p/original/gh4cZbhZxyTbgxQPxD0dOudNPTn.jpg",
              providers: ["Netflix"],
            },
            {
              title: "The Amazing Spider-Man",
              imgUrl:
                "https://image.tmdb.org/t/p/original/fSbqPbqXa7ePo8bcnZYN9AHv6zA.jpg",
              providers: ["Watcha", "Disney Plus"],
            },
            {
              title: "Spider-Man 2",
              imgUrl:
                "https://image.tmdb.org/t/p/original/olxpyq9kJAZ2NU1siLshhhXEPR7.jpg",
              providers: ["Netflix"],
            },
            {
              title: "Spider-Man: Into the Spider-Verse",
              imgUrl:
                "https://image.tmdb.org/t/p/original/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
              providers: ["Netflix", "Watcha", "Disney Plus"],
            },
            {
              title: "The Amazing Spider-Man 2",
              imgUrl:
                "https://image.tmdb.org/t/p/original/c3e9e18SSlvFd1cQaGmUj5tqL5P.jpg",
              providers: ["Netflix", "Disney Plus"],
            },
          ],
          error: null,
        })
      );
  };
  useEffect(() => {
    console.log(datas);
  }, [datas]);
  return (
    <DivSearch>
      <SearchForm ref={searchRef} onClick={handleSearch} />
      {datas && (
        <DivFlex>
          <h1>
            {searchRef.current.value}...<small>검색결과</small>
          </h1>

          <SearchResult data={datas.data} />
        </DivFlex>
      )}
    </DivSearch>
  );
};

const DivSearch = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 3em;
  }
  small {
    font-size: 0.5em;
  }
`;

const DivFlex = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 30%;
  align-items: center;
`;

export default Search;
