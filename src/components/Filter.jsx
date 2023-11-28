/* eslint-disable react/prop-types */
import { useState } from "react";
import styled from "styled-components";

const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  padding: 1rem;
  border-radius: 5px;
  justify-content: center;
`;

const Label = styled.label`
  font-weight: bolder;
`;

const CustomSelect = styled.div`
  position: relative;
  text-align: center;
  width: 10rem;
`;

const SelectHeader = styled.div`
  padding: 1rem;
  border-radius: 5px;
  border: 1px solid rgb(51 65 85);
  text-align: center;
  color: rgb(148 163 184);
  cursor: pointer;
  background-color: rgb(15, 23, 42);
`;

const OptionsContainer = styled.div`
  position: absolute;
  margin-top: 5px;
  width: 100%;
  background-color: rgb(15, 23, 42);
  border: 1px solid rgb(51 65 85);
  border-radius: 5px;
  z-index: 1;
  max-height: 10rem;
  overflow-y: auto;
`;

const Option = styled.div`
  padding: 8px 12px;
  text-align: center;
  color: rgb(148 163 184);
  cursor: pointer;

  &:hover {
    background-color: red;
    border-radius: 5px;
  }
`;

const Button = styled.button`
  background-color: rgb(239 68 68);
  border: none;
  padding: 1rem;
  margin-top: 15px;
  color: ghostwhite;
  width: 8rem;
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;
  &:hover {
    background-color: rgb(250 80 80);
  }
`;

const CustomFilterSelect = ({
  label,
  options,
  selectedOption,
  handleOptionClick,
  isOpen,
  setIsOpen,
}) => (
  <>
    <CustomSelect>
      <Label htmlFor={label}>{label}:</Label>
      <SelectHeader onClick={() => setIsOpen(!isOpen)}>
        {selectedOption}
      </SelectHeader>
      {isOpen && (
        <OptionsContainer>
          {options.map((option, index) => (
            <Option key={index} onClick={() => handleOptionClick(option)}>
              {option}
            </Option>
          ))}
        </OptionsContainer>
      )}
    </CustomSelect>
  </>
);

const Filter = ({
  setStatus,
  setGender,
  setSpecies,
  setLocation,
  setEpisode,
  setType,
}) => {
  const [filterOptions, setFilterOptions] = useState({
    Status: ["Dead", "Alive", "Unknown"],
    Location: Array.from(
      { length: 126 },
      (_, index) => `Location ${index + 1}`
    ),
    Episode: Array.from({ length: 51 }, (_, index) => `Episode ${index + 1}`),
    Gender: ["female", "male", "genderless", "unknown"],
    Species: [
      "Human",
      "Alien",
      "Humanoid",
      "Poopybutthole",
      "Mythological",
      "Unknown",
      "Animal",
      "Disease",
      "Robot",
      "Cronenberg",
      "Planet",
    ],
    Type: [
      "Genetic experiment",
      "Parasite",
      "Human with antennae",
      "Human with ants in his eyes",
      "Superhuman (Ghost trains summoner)",
    ],
  });

  const [selectedOptions, setSelectedOptions] = useState({
    Status: "Alive",
    Location: "Location 1",
    Episode: "Episode 1",
    Gender: "Male",
    Species: "Human",
    Type: "Parasite",
  });

  const [isOpen, setIsOpen] = useState({
    Status: false,
    Location: false,
    Episode: false,
    Gender: false,
    Species: false,
    Type: false,
  });

  const toggleFilterOpen = (filter) => {
    setIsOpen((prevOpen) => ({
      ...prevOpen,
      [filter]: !isOpen[filter],
    }));
  };

  const handleOptionClick = (filter, option) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [filter]: option,
    }));
    toggleFilterOpen(filter);
  };

  const handleClick = () => {
    setStatus(selectedOptions.Status);
    setGender(selectedOptions.Gender);
    setSpecies(selectedOptions.Species);
    setLocation(selectedOptions.Location);
    setEpisode(selectedOptions.Episode);
    setType(selectedOptions.Type);
  };

  const resetButtonHandler = () => {
    setStatus("");
    setGender("");
    setSpecies("");
    setLocation("");
    setEpisode("");
    setType("");
  };

  return (
    <>
      <FilterContainer>
        {Object.keys(filterOptions).map((filter) => (
          <CustomFilterSelect
            key={filter}
            label={filter}
            options={filterOptions[filter]}
            selectedOption={selectedOptions[filter]}
            handleOptionClick={(option) => handleOptionClick(filter, option)}
            isOpen={isOpen[filter]}
            setIsOpen={() => toggleFilterOpen(filter)}
          />
        ))}
        <Button onClick={handleClick}>FILTER</Button>
        <Button onClick={resetButtonHandler}>RESET</Button>
      </FilterContainer>
    </>
  );
};

export default Filter;
