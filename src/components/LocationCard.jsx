/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Label } from "../globalStyles";

const ViewContainer = styled.div`
  display: grid;
  margin: auto;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const LocationCard = ({ results }) => {
  let navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/location/${id}`);
  };
  return (
    <ViewContainer>
      {results.map((data, index) => (
        <CardContainer onClick={() => handleClick(data.id)} key={index}>
          <Label>
            Location : <span>{data.id}</span>
          </Label>
          <Label>
            name : <span>{data.name}</span>
          </Label>
          <Label>
            type : <span>{data.type}</span>
          </Label>
          <Label>
            dimension : <span>{data.dimension}</span>
          </Label>
          <Label>
            Total Residents : <span>{data?.residents?.length}</span>
          </Label>
        </CardContainer>
      ))}
    </ViewContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  cursor: pointer;
  flex-direction: column;
  border: 1px solid rgb(51 65 85);
  border-radius: 5px;
  width: 20rem;
  text-transform: uppercase;
  align-items: center;
`;

export default LocationCard;
