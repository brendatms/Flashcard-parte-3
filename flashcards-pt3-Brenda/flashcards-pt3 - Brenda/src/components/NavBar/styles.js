import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1.5rem;
  width: 100%;
  height: 5rem;

  position: fixed;
  top: 0;
  left: 0;

  background-color: darkcyan;

  img {
    width: 4rem;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;

    a {
      text-decoration: none;
      color: white;

      font-size: 2rem;
      transition: 100ms ease;

      &:hover {
        filter: brightness(0.65);
      }
    }
  }
`;
