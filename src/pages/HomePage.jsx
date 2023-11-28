import styled from "styled-components";
import Search from "../components/Search";
import Filter from "../components/Filter";
import CharacterviewArea from "../components/CharacterviewArea";
import { useCallback, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const PaginationContainer = styled.div`
  ul {
    display: flex;
    justify-content: center;
    gap: 10px;
    list-style: none;
    padding: 0;
    margin: 20px 0;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    /* background-color: ; */
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: red;
    }

    &.active {
      background-color: red;
      color: #fff;
    }

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      text-decoration: none;
      color: inherit;
    }
  }

  .prev,
  .next {
    background-color: rgb(71 85 105);
    color: #fff;
    border: none;
    width: 3rem;
    height: 3rem;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
`;
const HomePage = () => {
  let [pageNumber, updatePageNumber] = useState(1);
  let [status, setStatus] = useState("");
  let [gender, setGender] = useState("");
  let [species, setSpecies] = useState("");
  let [location, setLocation] = useState("");
  let [episode, setEpisode] = useState("");
  let [type, setType] = useState("");
  let [fetchedData, updateFetchedData] = useState([]);
  let [search, setSearch] = useState("");
  let { info, results } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}&location=${location}&tyoe=${type}&episode=${episode}`;

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const data = await fetch(api).then((res) => res.json());
        if (isMounted) {
          updateFetchedData(data);
        }
      } catch (error) {
        // Handle error
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [api]);

  const pageChange = useCallback(
    (data) => {
      updatePageNumber(data.selected + 1);
    },
    [updatePageNumber]
  );

  return (
    <HomeContainer>
      <Search
        setSearch={setSearch}
        updatePageNumber={updatePageNumber}
        placeholder={"Search for characters"}
      />
      <Filter
        setStatus={setStatus}
        setGender={setGender}
        setSpecies={setSpecies}
        setLocation={setLocation}
        setEpisode={setEpisode}
        setType={setType}
      />
      {fetchedData?.results ? (
        <>
          <CharacterviewArea results={fetchedData.results} />
        </>
      ) : (
        <p>Loading...</p>
      )}
      <PaginationContainer>
        <ReactPaginate
          containerClassName="pagination"
          nextLabel="Next"
          forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
          previousLabel="Prev"
          previousClassName="btn btn-primary fs-5 prev"
          nextClassName="btn btn-primary fs-5 next"
          activeClassName="active"
          pageCount={info?.pages}
          onPageChange={pageChange}
          pageClassName="page-item"
          pageLinkClassName="page-link"
        />
      </PaginationContainer>
    </HomeContainer>
  );
};

export default HomePage;
