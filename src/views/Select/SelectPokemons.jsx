import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom"

const SelectPokemons = () => {
    const { name } = useParams();
    const [PokemonChoise, setPokemonChoise] = useState({});
    const urlApi = `https://pokeapi.co/api/v2/pokemon/${name}`;
    
    const getApi = async () => {
      try {
        const response = await fetch(urlApi);
        const data = await response.json();
        setPokemonChoise(data);
    } catch (error) {
        console.error("Error fetching data from API:", error);
    }
    }

    useEffect(() => {
      getApi();
      
    },[]);
   
    return (
      <div className="d-flex flex-column align-items-center justify-content-center"
      style={{ height: '100vh' }}>
        {PokemonChoise && PokemonChoise.stats && (
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/home/${PokemonChoise.id}.png`} />
            <Card.Body>
              <Card.Title>{PokemonChoise.name}</Card.Title>
              <Card.Text>
                <ul>
                  {PokemonChoise.stats.map((stat, index) => (
                    <li key={index}>{stat.stat.name}: {stat.base_stat} </li>
                  ))}
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        )}
      </div>
    )
}

export default SelectPokemons
