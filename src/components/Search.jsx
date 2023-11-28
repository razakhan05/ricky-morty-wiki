import styled from "styled-components";

const SearchContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 2rem 0 1rem 0;
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

const Search = ({ setSearch, updatePageNumber, placeholder }) => {
  return (
    <SearchContainer>
      <Input
        onChange={(e) => {
          updatePageNumber(1);
          setSearch(e.target.value);
        }}
        placeholder={placeholder}
      />
    </SearchContainer>
  );
};

export default Search;
