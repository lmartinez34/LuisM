function Login() {
  return (
    <div>
      <h1>Iniciar Sesión</h1>
      <form>
        <input type="email" placeholder="Correo electronico" />
        <input type="password" placeholder="Contraseña" />
        <button type="submit">
          Iniciar sesion
        </button>
      </form>
    </div>
  );
}

export default Login;