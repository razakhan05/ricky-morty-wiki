import styled from "styled-components";

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
  return (
    <ViewContainer>
      {results.map((data, index) => (
        <CardContainer key={index}>
          <Image src={data.image} />
          <Heading>{data.name}</Heading>
          <Box>
            <Label>Gender : {data.gender}</Label>
            <Label>STATUS : {data.status}</Label>
            <Label>SPECIES : {data.species}</Label>
          </Box>
        </CardContainer>
      ))}
    </ViewContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid rgb(51 65 85);
  border-radius: 5px;
  text-transform: uppercase;
  align-items: center;
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  margin-bottom: 10px;
`;
const Heading = styled.label`
  font-size: larger;
  font-weight: bold;
`;
const Label = styled.label`
  font-size: medium;
  font-weight: bold;
  color: #f8f8ffc6;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  margin: 1rem 0 1rem 0;
  width: 100%;
`;

export default CharacterviewArea;
