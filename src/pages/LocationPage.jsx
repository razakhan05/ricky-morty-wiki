import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import styled from "styled-components";
import Search from "../components/Search";
import LocationCard from "../components/LocationCard";
import { PaginationContainer } from "../globalStyles";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const LocationPage = () => {
  const [pageNumber, updatePageNumber] = useState(1);
  const [fetchedData, updateFetchedData] = useState([]);
  const [search, setSearch] = useState("");

  const api = `https://rickandmortyapi.com/api/location/?page=${pageNumber}&name=${search}`;

  console.log(fetchedData, "mansi");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(api);
        if (response.ok) {
          const data = await response.json();
          updateFetchedData(data);
        } else {
          throw new Error("Network response was not ok.");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle errors or set appropriate state to indicate failure
      }
    };

    fetchData();
  }, [api]);

  const pageChange = (data) => {
    updatePageNumber(data.selected + 1);
  };

  return (
    <HomeContainer>
      <Search
        setSearch={setSearch}
        updatePageNumber={updatePageNumber}
        placeholder={"Search for location by name"}
      />
      {fetchedData?.results ? (
        <LocationCard results={fetchedData.results} />
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
          pageCount={fetchedData?.info?.pages || 0}
          onPageChange={pageChange}
          pageClassName="page-item"
          pageLinkClassName="page-link"
        />
      </PaginationContainer>
    </HomeContainer>
  );
};

export default LocationPage;
