import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:1337/api/auth/local/register', userData);
      console.log(response.data);
      // Vous pouvez stocker le JWT reçu ici, par exemple dans localStorage
      // localStorage.setItem('jwt', response.data.jwt);
      alert('Inscription réussie !');
    } catch (error) {
      console.error(error);
      alert('Erreur lors de l\'inscription');
    }
  };

  return (
    <div>
      <h2>Inscription</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={userData.username}
          onChange={handleChange}
          placeholder="Nom d'utilisateur"
          required
        />
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
          placeholder="Mot de passe"
          required
        />
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
}

export default Register;
