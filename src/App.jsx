import { Route, Routes } from "react-router-dom";
import "./App.css";
import styled from "styled-components";
import HomePage from "./pages/HomePage";
import EpisodesPage from "./pages/EpisodesPage";
import LocationPage from "./pages/LocationPage";
import Header from "./components/Header";

const HeaderContainer = styled.nav`
  display: flex;
  background-color: rgb(30 41 59);
`;
function App() {
  return (
    <>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <Routes>
        <Route path="/" exact Component={HomePage} />
        <Route path="/episodes" Component={EpisodesPage} />
        <Route path="/location" Component={LocationPage} />
      </Routes>
    </>
  );
}

export default App;
