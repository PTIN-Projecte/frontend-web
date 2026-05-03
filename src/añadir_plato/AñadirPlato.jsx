import { useState } from 'react';
import ModalAlergenos, { ALERGENOS } from './ModalAlergenos.jsx';

export default function AñadirPlato() {
  const [alergenos, setAlergenos] = useState([]);

  const alergenosSeleccionados = ALERGENOS.filter((a) => alergenos.includes(a.id));

  return (
    <div style={{ padding: '40px' }}>
      <h2>Añadir Plato</h2>

      <div style={{ marginTop: '20px' }}>
        <label style={{ fontWeight: 500, display: 'block', marginBottom: '8px' }}>
          Alérgenos:
        </label>

        <ModalAlergenos seleccionados={alergenos} onChange={setAlergenos} />

        {alergenosSeleccionados.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '12px' }}>
            {alergenosSeleccionados.map((a) => (
              <img
                key={a.id}
                src={a.icon}
                alt={a.label}
                title={a.label}
                style={{ width: '48px', height: '48px', objectFit: 'contain' }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}