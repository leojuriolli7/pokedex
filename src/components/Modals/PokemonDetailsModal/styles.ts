import styled from "styled-components";

export const Container = styled.div`
  img {
    width: 130px;
    height: 120px;
    object-fit: cover;
  }

  .modal-header {
    div::first-letter {
      text-transform:capitalize;
    }
  }
`

export const AbilityContainer = styled.div`
`

export const Ability = styled.p`
  font-size: 20px;
  color: #000;
  text-transform:capitalize;
`

export const AbilityTitle = styled(Ability)`
  font-size: 26px;
  margin-top: 2rem;
`


