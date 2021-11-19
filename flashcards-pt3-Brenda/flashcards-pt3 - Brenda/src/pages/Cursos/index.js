import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

import Course from "../../components/Course";

import axios from "axios";

const Cursos = () => {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    axios
      .get("https://flashcard-api-mayck.herokuapp.com/api/colecoes")
      .then(({ data }) => {
        setCursos(data);
      });
  }, []);

  return (
    <Container>
      <div className="header">
        <h1 className="title">Cursos</h1>
        <Link to="/cadastrar">+ Cadastrar</Link>
      </div>
      <div className="cursos">
        {cursos.map((curso) => {
          return (
            <Course
              key={curso.colecaoId}
              id={curso.colecaoId}
              name={curso.nome}
              desc={curso.descricao}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default Cursos;
