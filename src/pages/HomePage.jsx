import styled from "styled-components";
import Search from "../components/Search";
import Filter from "../components/Filter";
import CharacterviewArea from "../components/CharacterviewArea";
import { useCallback, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { PaginationContainer } from "../globalStyles";
import Loader from "../components/Loader";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
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
  let { info } = fetchedData;

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
        <Loader />
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
