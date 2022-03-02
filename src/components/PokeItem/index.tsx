import * as S from './styles'
import { PokemonDetailsModal } from '../Modals/PokemonDetailsModal'
import { api } from '../../services/api'
import { useEffect, useState } from 'react'

interface PackageInterface {
  name: string,
  url: string
}

interface PokemonsDetailsInterface {
  id: number,
  sprites: any
  name: string,
}

export function PokeItem() {
  const [pokemonInfo, setPokemonInfo] = useState<PackageInterface[]>([])
  const [pokemonsDetails, setPokemonsDetails] = useState<PokemonsDetailsInterface[]>([])
  const [pokemonDetailsModal, setPokemonDetailsModal] = useState(false)
  const [currentPokemon, setCurrentPokemon] = useState(false)

  useEffect(() => {
    api.get("pokemon?limit=151").then(response => {
      setPokemonInfo(response.data.results)
    })
  }, [])

  useEffect(() => {
    if (pokemonInfo) {
      // eslint-disable-next-line array-callback-return
      pokemonInfo.map(pokemonDetail => {
        api.get(`pokemon/${pokemonDetail.name}`)
        .then(response => {
          setPokemonsDetails(pokemonDetails => [...pokemonDetails, response.data])
        })
      })
    }
  }, [pokemonInfo])

  const setCurrentPokemonAndOpenModal = (pokemon: any) => {
    setCurrentPokemon(pokemon)
    setPokemonDetailsModal(true)
  }

  return(
      <S.Container>
        {pokemonsDetails?.map(pokemon => {
          return (
            <S.Content key={pokemon.id} onClick={() => setCurrentPokemonAndOpenModal(pokemon)}>
              <img src={pokemon.sprites.front_default} alt="Foto do Pokemon" />
              <p>{pokemon.name}</p>
            </S.Content>
          )
        })}

        <PokemonDetailsModal 
          pokemon={currentPokemon}
          isOpen={pokemonDetailsModal}
          closeModal={() => setPokemonDetailsModal(false)} 
        />
       
      </S.Container>
  )
}