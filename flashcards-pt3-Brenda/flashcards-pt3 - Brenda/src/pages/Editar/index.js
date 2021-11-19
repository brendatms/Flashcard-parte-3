import { Container } from "./styles";

import { useParams } from "react-router-dom";

import Form from "../../components/Form";

const Cadastrar = () => {
  const { id } = useParams();

  return (
    <Container>
      <h1 className="title">Cadastrar curso</h1>
      <Form editar id={id} />
    </Container>
  );
};

export default Cadastrar;
