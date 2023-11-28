import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Label } from "../globalStyles";

const DetailsContainer = styled.div`
  display: grid;
  margin: auto;
  margin-top: 2rem;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 5px;
`;

const ContentContainer = styled.div`
  display: flex;
  text-align: left;
  padding: 0 1rem 0 1rem;
  justify-content: center;
  flex-direction: column;
`;
const FeaturedContainer = styled.div`
  border: 1px solid rgb(51 65 85);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  overflow-y: auto;
  height: 70vh;
  li {
    font-size: larger;
    color: rgb(148 163 184);
    margin: 10px 0 1rem 0;
  }
`;
const CharacterDetailPage = () => {
  const { id } = useParams();

  const [fetchedData, updateFetchedData] = useState({});
  const { name, gender, image, location, status, species, type, origin } =
    fetchedData;

  const [data, setData] = useState({});
  const [episodeNames, setEpisodeNames] = useState([]); // State to store episode names

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/${id}`
        );
        const characterData = await response.json();
        updateFetchedData(characterData);

        if (characterData.location) {
          const result = await fetch(characterData.location.url);
          const locationData = await result.json();
          setData(locationData);
        }

        // Fetch and store episode names
        const episodesResponse = await Promise.all(
          characterData.episode.map(async (episodeUrl) => {
            const episodeResult = await fetch(episodeUrl);
            const episodeData = await episodeResult.json();
            return episodeData.name; // Extract episode name
          })
        );
        setEpisodeNames(episodesResponse);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  const { dimension, residents } = data;

  return (
    <DetailsContainer>
      <Image src={image} alt={name} />
      <ContentContainer>
        <Label>
          Name: <span>{name}</span>
        </Label>
        <Label>
          Gender: <span>{gender}</span>
        </Label>
        <Label>
          Status: <span>{status}</span>
        </Label>
        <Label>
          Species: <span>{species}</span>
        </Label>
        {type && (
          <Label>
            Type: <span>{type}</span>
          </Label>
        )}
        <Label>
          Origin: <span>{origin?.name}</span>
        </Label>
        <Label>
          Location: <span>{location?.name}</span>
        </Label>
        <Label>
          Total Residents In <span>{location?.name}</span> :{" "}
          <span>{residents?.length}</span>
        </Label>
        {dimension && (
          <Label>
            Dimension: <span>{dimension}</span>
          </Label>
        )}
      </ContentContainer>
      {/* Display episode names */}
      {episodeNames.length > 0 && (
        <div>
          <Label>
            <span>{name}</span> Featured in these episodes :
          </Label>
          <FeaturedContainer>
            <ol>
              {episodeNames.map((episodeName, index) => (
                <li key={index}>{episodeName}</li>
              ))}
            </ol>
          </FeaturedContainer>
        </div>
      )}

      {/* Additional details can be added here */}
    </DetailsContainer>
  );
};

export default CharacterDetailPage;
