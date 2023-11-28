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

const EpisodeDetailsPage = () => {
  const { id } = useParams();
  const [episodesData, setEpisodesData] = useState();
  const [charactersData, setCharactersData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/episode/${id}`
        );
        const episodeData = await response.json();
        setEpisodesData(episodeData);

        if (episodeData && episodeData.characters) {
          const characterResponse = await Promise.all(
            episodeData.characters.map(async (url) => {
              const result = await fetch(url);
              const character = await result.json();
              return character;
            })
          );
          setCharactersData(characterResponse);
        }
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <DetailsContainer>
      {episodesData && (
        <>
          <Label>
            Episode : <span>{episodesData.episode}</span>
          </Label>
          <Label>
            Episode name : <span>{episodesData.name}</span>
          </Label>
          <Label>
            Aired Date : <span>{episodesData.air_date}</span>
          </Label>

          <Label>
            All the character from <span>{episodesData?.name} episode</span>
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

export default EpisodeDetailsPage;
