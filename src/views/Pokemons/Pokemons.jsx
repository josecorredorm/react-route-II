
import { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Pokemons = () => {
    const navigate = useNavigate()
    const [PokeSelect, setPokeSelect] = useState("")
    const [PokeInfo, setPokeInfo] = useState([])
    const UrlAPi='https://pokeapi.co/api/v2/pokemon'
    const data = async () => {
        const response = await fetch(UrlAPi)
        const data = await response.json()
        setPokeInfo(data.results)
    }
    useEffect(() => {
        data();
    },[]);

    const funtiondetails = () => {
        navigate(`/pokemons/${PokeSelect}`)
    }
  return (
    <div 
    className='d-flex flex-column align-items-center justify-content-center gap-5'
    style={{ height: '100vh' }}>
     <h2>Selecciona un pokemon</h2>
        <select onChange={(e) => setPokeSelect(e.target.value)}>
            <option disabled >Selecciona un pokemon</option>
            {PokeInfo.map((poke, index) => (
            <option key={index} value={poke.name}>{poke.name}</option>
            ))}
        </select>
    <Button variant="dark" onClick={() => funtiondetails()}>Ver detalles</Button>
    </div>
  )
}

export default Pokemons
