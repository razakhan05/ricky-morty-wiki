import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import styled from "styled-components";
import Search from "../components/Search";
import EpisodeCard from "../components/EpisodeCard";
import { PaginationContainer } from "../globalStyles";
import Loader from "../components/Loader";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const EpisodesPage = () => {
  let [pageNumber, updatePageNumber] = useState(1);
  let [fetchedData, updateFetchedData] = useState([]);
  let [search, setSearch] = useState("");
  let { info } = fetchedData;

  let api = `https://rickandmortyapi.com/api/episode/?page=${pageNumber}&name=${search}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  let pageChange = (data) => {
    updatePageNumber(data.selected + 1);
  };
  return (
    <HomeContainer>
      <Search
        setSearch={setSearch}
        updatePageNumber={updatePageNumber}
        placeholder={"Search for Episodes By Name"}
      />
      {fetchedData?.results ? (
        <>
          <EpisodeCard results={fetchedData.results} />
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

export default EpisodesPage;
