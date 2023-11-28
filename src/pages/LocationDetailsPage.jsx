import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import CharacterviewArea from "../components/CharacterviewArea";
import Loader from "../components/Loader";

const DetailsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const CardContainer = styled.div`
  height: 60vh;
  padding: 10px;
  box-shadow: rgba(249, 249, 250, 0.377) 0px 13px 27px -5px,
    rgba(248, 247, 247, 0.353) 0px 8px 16px -8px;
  overflow-y: auto;
  border: 1px solid rgb(71 85 105);
  border-radius: 5px;
`;

const Label = styled.h1`
  text-transform: uppercase;
  font-size: larger;
  color: rgb(71 85 105);
  span {
    color: rgb(148 163 184);
  }
`;

const LocationDetailsPage = () => {
  const { id } = useParams();
  const [locationData, setLocationData] = useState({});
  const [charactersData, setCharactersData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/location/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const location = await response.json();
        setLocationData(location);

        if (location && location.residents) {
          const characterResponses = await Promise.all(
            location.residents.map(async (url) => {
              const result = await fetch(url);
              if (!result.ok) {
                throw new Error("Failed to fetch character data");
              }
              return await result.json();
            })
          );
          setCharactersData(characterResponses);
        }
        setIsLoading(false);
      } catch (error) {
        setError("Failed to fetch data");
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <DetailsContainer>
      {locationData && (
        <>
          <Label>
            name : <span>{locationData.name}</span>
          </Label>
          <Label>
            type : <span>{locationData.type}</span>
          </Label>
          <Label>
            dimension : <span>{locationData.dimension}</span>
          </Label>
          <Label>
            All characters from <span>{locationData?.name}</span> location
          </Label>
          <CardContainer>
            {charactersData.length > 0 && (
              <CharacterviewArea results={charactersData} />
            )}
          </CardContainer>
        </>
      )}
    </DetailsContainer>
  );
};

export default LocationDetailsPage;
