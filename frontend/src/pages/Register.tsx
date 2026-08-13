function Register() {
  return (
    <div>
      <h1>Registrarse</h1>

      <form>
        <input type="text" placeholder="Nombre" />
        <input type="text" placeholder="Apellido" />
        <input type="email" placeholder="Correo electronico" />
        <input type="password" placeholder="Contraseña" />
        <button type="submit">
          Registrarse
        </button>
      </form>
    </div>

  );
}

export default Register;