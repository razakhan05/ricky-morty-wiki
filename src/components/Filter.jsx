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

const Label = styled.label``;

const CustomSelect = styled.div`
  position: relative;
  width: 7rem;
`;

const SelectHeader = styled.div`
  padding: 1rem;
  border-radius: 5px;
  border: 1px solid rgb(51 65 85);
  text-align: center;
  color: ghostwhite;
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
  color: white;
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
    <Label htmlFor={label}>{label}:</Label>
    <CustomSelect>
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
  const [statusOpen, setStatusOpen] = useState(false);
  const [statusOption, setStatusOption] = useState("Alive");
  const [locationOpen, setLocationOpen] = useState(false);
  const [locationOpt, setLocationOpt] = useState("Location 1");
  const [episodeOpen, setEpisodeOpen] = useState(false);
  const [episodeOpt, setEpisodeOpt] = useState("Episode 1");
  const [genderOpen, setGenderOpen] = useState(false);
  const [genderOpt, setGenderOpt] = useState("Male");
  const [speciesOpen, setSpeciesOpen] = useState(false);
  const [speciesOpt, setSpeciesOpt] = useState("Human");
  const [typeOpen, setTypeOpen] = useState(false);
  const [typeOpt, setTypeOpt] = useState("Parasite");

  const toggleStatusOpen = () => setStatusOpen(!statusOpen);
  const toggleLocationOpen = () => setLocationOpen(!locationOpen);
  const toggleEpisodeOpen = () => setEpisodeOpen(!episodeOpen);
  const toggleGenderOpen = () => setGenderOpen(!genderOpen);
  const toggleSpeciesOpen = () => setSpeciesOpen(!speciesOpen);
  const toggleTypeOpen = () => setTypeOpen(!typeOpen);

  const handleStatusClick = (option) => {
    setStatusOption(option);
    setStatusOpen(false);
  };

  const handleLocationClick = (option) => {
    setLocationOpt(option);
    setLocationOpen(false);
  };

  const handleEpisodeClick = (option) => {
    setEpisodeOpt(option);
    setEpisodeOpen(false);
  };

  const handleGenderClick = (option) => {
    setGenderOpt(option);
    setGenderOpen(false);
  };

  const handleSpeciesClick = (option) => {
    setSpeciesOpt(option);
    setSpeciesOpen(false);
  };

  const handleTypeClick = (option) => {
    setTypeOpt(option);
    setTypeOpen(false);
  };

  const handleClick = () => {
    setStatus(statusOption);
    setGender(genderOpt);
    setSpecies(speciesOpt);
    setLocation(locationOpt);
    setEpisode(episodeOpt);
    setType(typeOpt);
  };

  const statusOptions = ["Dead", "Alive", "Unknown"];
  const typeOptions = [
    "Genetic experiment",
    "Parasite",
    "Human with antennae",
    "Human with ants in his eyes",
    "Superhuman (Ghost trains summoner)",
  ];
  const locationOptions = Array.from(
    { length: 126 },
    (_, index) => `Location ${index + 1}`
  );
  const episodeOptions = Array.from(
    { length: 51 },
    (_, index) => `Episode ${index + 1}`
  );
  const speciesOptions = [
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
  ];
  const genderOptions = ["female", "male", "genderless", "unknown"];

  return (
    <>
      <FilterContainer>
        <CustomFilterSelect
          label="Status"
          options={statusOptions}
          selectedOption={statusOption}
          handleOptionClick={handleStatusClick}
          isOpen={statusOpen}
          setIsOpen={toggleStatusOpen}
        />
        <CustomFilterSelect
          label="Location"
          options={locationOptions}
          selectedOption={locationOpt}
          handleOptionClick={handleLocationClick}
          isOpen={locationOpen}
          setIsOpen={toggleLocationOpen}
        />
        <CustomFilterSelect
          label="Episode"
          options={episodeOptions}
          selectedOption={episodeOpt}
          handleOptionClick={handleEpisodeClick}
          isOpen={episodeOpen}
          setIsOpen={toggleEpisodeOpen}
        />
        <CustomFilterSelect
          label="Gender"
          options={genderOptions}
          selectedOption={genderOpt}
          handleOptionClick={handleGenderClick}
          isOpen={genderOpen}
          setIsOpen={toggleGenderOpen}
        />
        <CustomFilterSelect
          label="Species"
          options={speciesOptions}
          selectedOption={speciesOpt}
          handleOptionClick={handleSpeciesClick}
          isOpen={speciesOpen}
          setIsOpen={toggleSpeciesOpen}
        />
        <CustomFilterSelect
          label="Type"
          options={typeOptions}
          selectedOption={typeOpt}
          handleOptionClick={handleTypeClick}
          isOpen={typeOpen}
          setIsOpen={toggleTypeOpen}
        />
        <Button onClick={handleClick}>FILTER</Button>
      </FilterContainer>
    </>
  );
};

export default Filter;
