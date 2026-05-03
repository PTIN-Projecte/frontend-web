import { Routes, Route } from 'react-router-dom'
import AñadirPlato from './añadir_plato/AñadirPlato.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AñadirPlato />} />
    </Routes>
  )
}