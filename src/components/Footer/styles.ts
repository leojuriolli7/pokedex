import styled from "styled-components";

export const Container = styled.footer`
  background: var(--shape);
  box-shadow: 1px 5px 15px 5px rgba(0, 0, 0, 0.1);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0.8rem 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FooterImage = styled.img`
  transition: all 400ms ease;
  height: 40px;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;
