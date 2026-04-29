import { BASE_URL } from '../../api.config';

// Función para crear usuario
export const createUser = async (userData) => {
  const response = await fetch(`${BASE_URL}/api/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  });
  if (!response.ok) throw new Error('Error al crear usuario');
  return await response.json();
};

// Función para login
export const loginRequest = async (username, password) => {
  const response = await fetch(`${BASE_URL}/api/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });
  if (!response.ok) throw new Error('Credenciales incorrectas');
  return await response.json();
};