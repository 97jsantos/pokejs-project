import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { Footer } from "./layout/Footer"
import { Header } from "./layout/Header"
import { Pokedex } from "./pages/Pokedex"
import { Pokemon } from "./pages/Pokemon"

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Pokedex />} />
        <Route path="/pokemon/:id" element={<Pokemon />} />
      </Routes>
      <Footer />
    </Router>
  )
}
export default App
