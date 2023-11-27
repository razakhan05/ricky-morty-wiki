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
  width: 10rem;
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

const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select Option");

  const options = ["Alive", "Dead", "Unknown"];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <FilterContainer>
      <>
        <Label htmlFor="status">Status:</Label>
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
        </CustomSelect>{" "}
        <Label htmlFor="status">Status:</Label>
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
        </CustomSelect>{" "}
        <Label htmlFor="status">Status:</Label>
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
        </CustomSelect>{" "}
        <Label htmlFor="status">Status:</Label>
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
    </FilterContainer>
  );
};

export default Filter;
