// src/api/index.js

import axios from 'axios';

export const registerUser = async (userData) => {
  try {
    const response = await axios.post('http://localhost:5000/api/users/register', userData);
    return response;
  } catch (error) {
    throw error;
  }
};
