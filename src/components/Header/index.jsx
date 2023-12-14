import { Container, Menu, Li } from "./style";

import { Link, useLocation } from "react-router-dom";

import Logo from "../../assets/logo2.png";

function Header() {
  const { pathname } = useLocation();

  return (
    <Container>
      <img src={Logo} alt="" />

      <Menu>
        <Li isActive={pathname === "/"}>
          <Link to={"/"}>Home</Link>
        </Li>

        <Li isActive={pathname.includes("movies")}>
          <Link to={"/movies"}>Filmes</Link>
        </Li>

        <Li isActive={pathname.includes("series")}>
          <Link to={"/series"}>Séries</Link>
        </Li>
      </Menu>
    </Container>
  );
}

export default Header;
