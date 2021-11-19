import styled from "styled-components";

export const Container = styled.div`
  padding: 3rem;

  .title {
    font-size: 5rem;
  }

  .header {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    a {
      text-decoration: none;
      color: darkcyan;
      font-size: 2rem;
      transition: 100ms ease;

      &:hover {
        filter: brightness(0.65);
      }
    }
  }

  .cursos {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.5rem;
  }
`;
