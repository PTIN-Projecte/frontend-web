import { useState } from 'react';
import { createUser } from '../services/userService';

export const useCreateUser = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const saveUser = async (userData) => {
    setLoading(true);
    setError(null);
    try {
      const newUser = await createUser(userData);
      setSuccess(true);
      return newUser;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { saveUser, loading, error, success };
};