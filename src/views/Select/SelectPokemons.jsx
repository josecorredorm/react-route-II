import { useState } from "react";
import { useParams } from "react-router-dom"

const SelectPokemons = () => {
    const { name } = useParams();
    const [Pokemon, setPokemon] = useState({})
    const urlApi = `https://pokeapi.co/api/v2/pokemon/${name}`

    const getdata = async () => {
    const response = await fetch(urlApi)
    const data = await response.json()
    console.log(data)
    setPokemon(data)
    }

  return (
    
    <div>
      pokemon seleccionado
    </div>
  )
}

export default SelectPokemons
