import styled from "styled-components";

export const Container = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;

  label {
    font-size: 1.5rem;
    margin: 1rem;
  }

  .text {
    padding: 1.5rem;
    border-bottom: 1px solid #1a8180;
    outline: none;
    width: 100%;
    font-size: 1.5rem;
  }

  .radioButton {
    margin: 1rem;
  }

  .buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;
    gap: 1.5rem;

    .sendButton {
      padding: 1rem;
      background-color: #1a8180;
      color: white;
      width: 100%;
      border-radius: 0.5rem;
      cursor: pointer;
      font-size: 1.5rem;
      transition: 0.1s ease;

      &:hover {
        filter: brightness(0.85);
      }
    }

    .cancel {
      background-color: rgba(255, 64, 64, 1);
    }
  }
`;
