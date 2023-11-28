import { Route, Routes } from "react-router-dom";
import "./App.css";
import styled from "styled-components";
import HomePage from "./pages/HomePage";
import EpisodesPage from "./pages/EpisodesPage";
import LocationPage from "./pages/LocationPage";
import Header from "./components/Header";
import CharacterDetailPage from "./pages/CharacterDetailPage";
import EpisodeDetailsPage from "./pages/EpisodeDetailsPage";
import LocationDetailsPage from "./pages/LocationDetailsPage";

const HeaderContainer = styled.nav`
  display: flex;
  background-color: rgb(30 41 59);
`;
function App() {
  return (
    <div className="App">
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <Routes>
        <Route path="/" exact Component={HomePage} />
        <Route path="/episodes" Component={EpisodesPage} />
        <Route path="/:id" Component={CharacterDetailPage} />
        <Route path="/episode/:id" Component={EpisodeDetailsPage} />
        <Route path="/location/:id" Component={LocationDetailsPage} />
        <Route path="/location" Component={LocationPage} />
      </Routes>
    </div>
  );
}

export default App;
