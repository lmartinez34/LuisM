import { useState } from "react";
import { login } from "../services/auth.service";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const data = await login({
        email,
        password,
      });

      console.log("Login exitoso:", data);

    } catch (error: any) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  return (
    <div>
      <h1>Iniciar Sesión</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="email"
          placeholder="Correo electronico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">
          Iniciar sesión
        </button>

      </form>
    </div>
  );
}

export default Login;