import * as S from "./styles";
import imgLogo from "../../assets/footerLogo.png";

export function Footer() {
  return (
    <S.Container>
      <S.Content>
        <S.FooterImage
          className="logo"
          src={imgLogo}
          alt="Pokeball"
          onClick={() => window.open("https://pokeapi.co/")}
        />
      </S.Content>
    </S.Container>
  );
}
