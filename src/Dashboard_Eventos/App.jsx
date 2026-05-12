import { useState, useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import Calendario from '../components/Calendario'
import './App.css'

function App() {
  const [eventos, setEventos] = useState([])

  useEffect(() => {
    // Simulación de API
    const eventosPrueba = [
      {
        id: '1',
        title: 'Catering Boda García',
        start: '2026-05-03T12:00:00',
        end: '2026-05-03T23:00:00',
        color: '#D1B67B'
      },
      {
        id: '2',
        title: 'Comida Empresa TechCorp',
        start: '2026-05-04T13:30:00',
        end: '2026-05-04T16:00:00',
        color: '#831F31'
      },
      {
        id: '3',
        title: 'Cena Romántica Evento Especial',
        start: '2026-05-04T20:00:00',
        end: '2026-05-04T23:30:00',
        color: '#104229'
      },
      {
        id: '4',
        title: 'Catering Congreso Médico',
        start: '2026-05-05T08:00:00',
        end: '2026-05-06T18:00:00', 
        color: '#95B387'
      },
      {
        id: '5',
        title: 'Comida Grupo Turistas',
        start: '2026-05-06T14:00:00',
        end: '2026-05-06T16:00:00',
        color: '#D1B67B'
      },
      {
        id: '6',
        title: 'Cena Cumpleaños (20 pax)',
        start: '2026-05-06T21:00:00',
        end: '2026-05-06T23:00:00',
        color: '#831F31'
      },
      {
        id: '7',
        title: 'Preparación Catering Festival',
        start: '2026-05-07T09:00:00',
        end: '2026-05-08T12:00:00', 
        color: '#104229'
      },
      {
        id: '8',
        title: 'Servicio Catering Festival',
        start: '2026-05-08T12:00:00',
        end: '2026-05-10T23:00:00', 
        color: '#D1B67B'
      },
      {
        id: '9',
        title: 'Comida VIP Inversores',
        start: '2026-05-09T14:00:00',
        end: '2026-05-09T17:00:00',
        color: '#831F31'
      },
      {
        id: '10',
        title: 'Cena Maridaje Especial',
        start: '2026-05-09T20:30:00',
        end: '2026-05-09T23:30:00',
        color: '#104229'
      },
      {
        id: '11',
        title: 'Brunch Domingo',
        start: '2026-05-10T10:00:00',
        end: '2026-05-10T13:00:00',
        color: '#95B387'
      },
      {
        id: '12',
        title: 'Catering Evento Deportivo',
        start: '2026-05-11T07:00:00',
        end: '2026-05-11T18:00:00',
        color: '#D1B67B'
      }
    ]

    setEventos(eventosPrueba)
  }, [])

  return (
    <div className="dashboard-container">
      <Sidebar eventos={eventos} />
      <main className="calendar-main">
        <Calendario eventos={eventos} />
      </main>
    </div>
  )
}

export default App