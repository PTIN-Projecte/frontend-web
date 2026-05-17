import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ConsultaUsuari from './pages/ConsultaClient'
import Login from './pruebas/components/login.jsx'
import Home from './pruebas/components/home.jsx'
import ListaPeticiones from './pruebas/components/lista-peticiones.jsx'
import RegisterPage from './pruebas/page/RegisterPage.jsx'


function App() {

  return (
    <>
      
    <BrowserRouter>
      <Routes>
        <Route path="/consulta-usuari" element={<ConsultaUsuari />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/peticiones" element={<ListaPeticiones />} />
      </Routes>  
    </BrowserRouter>
</>
  )
}

export default App