import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding: 0.5rem 2rem 0.5rem 2rem;
`;

const HeaderLogo = styled.img`
  border-radius: 100%;
  border: 1px solid red;
  object-fit: cover;
  /* background-color: rgb(153 27 27); */
  width: 4rem;
  height: 4rem;
`;

const HeaderMenu = styled.div`
  display: flex;
  gap: 10px;
  text-transform: uppercase;
`;

const HeaderMenuItem = styled(Link)`
  text-decoration: none;
  font-weight: bolder;
  color: rgb(148 163 184);
  &:hover {
    color: red;
  }
  @media screen and (min-width: 768px) {
    font-size: larger;
  }
`;
const Header = () => {
  return (
    <HeaderContainer>
      <Link to={"/"}>
        <HeaderLogo src="https://pluspng.com/img-png/rick-and-morty-png-rick-and-morty-png-hd-862.png" />
      </Link>
      <HeaderMenu>
        <HeaderMenuItem to={"/"}>Character</HeaderMenuItem>
        <HeaderMenuItem to={"/episodes"}>Episodes</HeaderMenuItem>
        <HeaderMenuItem to={"/location"}>Location</HeaderMenuItem>
      </HeaderMenu>
    </HeaderContainer>
  );
};

export default Header;
