import { Modal, Button } from "react-bootstrap";
import * as S from "./styles";

interface PokemonDetailsModalProps {
  pokemon: any;
  isOpen: boolean;
  closeModal: () => void;
}

export function PokemonDetailsModal({
  pokemon,
  isOpen,
  closeModal,
}: PokemonDetailsModalProps) {
  return (
    <Modal show={isOpen} onHide={closeModal} backdrop="static" keyboard={false}>
      <S.Container>
        <Modal.Header closeButton>
          <Modal.Title>{pokemon.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex align-items-center flex-column">
          <S.PokemonImage
            src={pokemon?.sprites?.front_default}
            alt="Foto do Pokemon"
          />
          <S.AbilityTitle>Abilities:</S.AbilityTitle>

          {pokemon?.abilities?.map((ability: any) => (
            <S.AbilityContainer>
              <S.Ability>- {ability.ability.name}</S.Ability>
            </S.AbilityContainer>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={closeModal}>Close</Button>
        </Modal.Footer>
      </S.Container>
    </Modal>
  );
}
