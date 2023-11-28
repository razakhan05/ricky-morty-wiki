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

const EpisodeCard = ({ results }) => {
  let navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/episode/${id}`);
  };
  return (
    <ViewContainer>
      {results.map((data, index) => (
        <CardContainer onClick={() => handleClick(data.id)} key={index}>
          <Label>
            episode : <span>{data.episode}</span>
          </Label>
          <Label>
            name : <span>{data.name}</span>
          </Label>
          <Label>
            Date : <span>{data.air_date}</span>
          </Label>

          <Label>
            Total Characters : <span>{data?.characters?.length}</span>
          </Label>
        </CardContainer>
      ))}
    </ViewContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
  width: auto;
  flex-direction: column;
  border: 1px solid rgb(51 65 85);
  border-radius: 5px;
  text-transform: uppercase;
  align-items: center;
`;

export default EpisodeCard;
