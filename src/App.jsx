import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Llista_Usuaris from './components/Llista_Usuaris'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/llista-usuaris" element={<Llista_Usuaris />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App