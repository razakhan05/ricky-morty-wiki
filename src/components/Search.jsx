import styled from "styled-components";

const SearchContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 1rem 0 1rem 0;
`;
const Input = styled.input`
  background-color: transparent;
  width: 40rem;
  padding: 1rem;
  border: 1px solid rgb(51 65 85);
  border-radius: 5px;
  color: whitesmoke;
  &:focus {
    outline: none;
  }
`;
const Button = styled.button`
  background-color: rgb(239 68 68);
  border: none;
  color: ghostwhite;
  width: 8rem;
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;
  &:hover {
    background-color: rgb(250 80 80);
  }
`;
const Search = ({ setSearch, updatePageNumber }) => {
  let searchHandler = (e) => {
    e.preventDefault();
  };
  return (
    <SearchContainer>
      <Input
        onChange={(e) => {
          updatePageNumber(1);
          setSearch(e.target.value);
        }}
        placeholder="search for characters"
      />
      <Button onClick={searchHandler}>SEARCH</Button>
    </SearchContainer>
  );
};

export default Search;
