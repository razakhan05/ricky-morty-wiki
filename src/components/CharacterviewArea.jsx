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

const CharacterviewArea = ({ results }) => {
  let navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/${id}`);
  };
  return (
    <ViewContainer>
      {results.map((data, index) => (
        <CardContainer onClick={() => handleClick(data.id)} key={index}>
          <Image src={data.image} />
          <Label>
            NAME : <span>{data.name}</span>
          </Label>
          <Box>
            <Label>
              Gender : <span>{data.gender}</span>
            </Label>
            <Label>
              STATUS : <span>{data.status}</span>
            </Label>
            <Label>
              SPECIES : <span>{data.species}</span>
            </Label>
          </Box>
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
  text-transform: uppercase;
  align-items: center;
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 20rem;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  width: 100%;
`;

export default CharacterviewArea;
