import * as S from './styles'
import imgLogo from '../../assets/logo.svg'


export function Header() {
  return(
    <S.Container>
      <S.Content>
        <img className="logo" src = {imgLogo} alt="Logo" onClick={() => window.open("https://pokeapi.co/")}/>
      </S.Content>
    </S.Container>
  )
}