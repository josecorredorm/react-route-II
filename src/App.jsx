import { Route, Routes } from "react-router-dom"
import Home from "./views/Home/Home"
import Pokemons from "./views/Pokemons/Pokemons"
import Menu from "./Components/NavbarPokemons/Menu"

const App = () => {
  return (
    <div>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/pokemons" element={<Pokemons />}></Route>
      </Routes>
    </div>
  )
}

export default App
