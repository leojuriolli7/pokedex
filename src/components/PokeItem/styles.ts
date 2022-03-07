import styled from "styled-components";

export const Container = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 649px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 429px) {
    grid-template-columns: 1fr;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: var(--shape);
  padding: 1rem 2rem;
  border-radius: 20px;
  margin: 1rem;
  box-shadow: 1px 5px 15px 5px rgba(0, 0, 0, 0.1);
  transition: all 400ms ease;
  cursor: pointer;

  p {
    font-size: 18px;
    color: var(--title-text);
  }

  &:hover {
    transform: scale(1.05);
  }
`;

export const PokemonSprite = styled.img`
  width: 130px;
  height: 120px;
  object-fit: cover;
`;

export const PokemonName = styled.p`
  ::first-letter {
    text-transform: capitalize;
  }
`;
