import { NavLink } from "react-router-dom"
import "./Menu.css"
import { Navbar } from "react-bootstrap"

const Menu = () => {
  return (
    <Navbar className="navbarpokemons d-flex justify-content-between p-5">
      <img className="icon" src="./icon.svg" alt="icono" />
      <div className="d-flex gap-3">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/pokemons">Pokemones</NavLink></div> 
    </Navbar>
  )
}

export default Menu
