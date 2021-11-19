import Spacer from "../Spacer";
import { useNavigate } from "react-router-dom";
import { Container } from "./styles";

import axios from "axios";

const Course = ({ id, name, desc }) => {
  const navigate = useNavigate();

  function editar() {
    navigate(`/editar/${id}`);
  }

  function remover() {
    axios
      .delete(`https://flashcard-api-mayck.herokuapp.com/api/colecoes/${id}`)
      .then(() => {
        window.location.reload();
      });
  }

  return (
    <Container>
      <h1>{name}</h1>
      <Spacer />
      <p>{desc}</p>
      <Spacer />
      <div className="buttonsContainer">
        <button onClick={editar}>Editar</button>
        <button onClick={remover}>Excluir</button>
      </div>
    </Container>
  );
};

export default Course;
