import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Afegir_Usuaris from './components/Afegir_Usuari'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/afegir-usuari" element={<Afegir_Usuaris />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App