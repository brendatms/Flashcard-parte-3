import styled from "styled-components";

export const Container = styled.div`
  width: 30%;
  height: 20rem;
  background-color: snow;
  padding: 2rem;
  border-radius: 1rem;
  cursor: pointer;
  transition: 100ms ease;

  h1 {
    font-size: 3rem;
  }

  p {
    font-size: 1.5rem;
  }

  &:hover {
    filter: brightness(0.85);
    transform: scale(1.05);
  }

  .buttonsContainer {
    display: flex;
    align-items: center;
    justify-content: left;
    gap: 2rem;

    button {
      color: rgba(0, 0, 0, 0.85);
      background: transparent;
      cursor: pointer;
      transition: 0.1s ease;
      font-size: 1.5rem;

      &:hover {
        color: rgba(0, 0, 0, 1);
      }
    }
  }
`;
