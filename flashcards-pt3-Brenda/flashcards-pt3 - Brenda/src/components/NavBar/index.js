import { Container } from "./styles";
import { Link } from "react-router-dom";

import perfil from "../../assets/fofa.png";

const NavBar = () => {
  return (
    <Container>
      <img src={perfil} alt="perfil" />
      <div>
        <Link to="/">Home</Link>
        <Link to="/cursos">Cursos</Link>
      </div>
    </Container>
  );
};

export default NavBar;
