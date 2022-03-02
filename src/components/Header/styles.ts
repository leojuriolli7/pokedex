import styled from "styled-components";

export const Container = styled.header`
  background: var(--shape);
  box-shadow: 1px 5px 15px 5px rgba(0,0,0,0.10);
`

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: .8rem 0;

  display: flex;
  align-items: center;
  justify-content: center;

  .logo {
    transition: all 400ms ease;
    height: 80px;

    &:hover {
      transform: scale(1.05);
      cursor: pointer;
    }
  }
`