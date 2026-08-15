import { useState } from 'react';
import { register } from '../services/auth.service';


function Register() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault();

    try {
      const response = await register(formData);

      setMessage(response.message);

      console.log("Usuario registrado:", response);

    } catch (error: any) {

      setMessage(
        error.response?.data?.message
      );
    }
  };

  return (
    <div>

      <h1>Crear cuenta</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="firstName"
          placeholder="Nombre"
          value={formData.firstName}
          onChange={handleChange}
        />

        <input
          type="text"
          name="lastName"
          placeholder="Apellido"
          value={formData.lastName}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={formData.password}
          onChange={handleChange}
        />

        <button type="submit">
          Registrarse
        </button>

      </form>

      {message && <p>{message}</p>}

    </div>

  );
}

export default Register;