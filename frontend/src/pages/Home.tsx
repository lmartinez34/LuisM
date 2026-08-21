import { useAuth } from "../context/AuthContext";


const Home = () => {
  const { user, loading, isAuthenticated } = useAuth();

  if (loading) {
    return <h2>Cargando...</h2>;
  }

  return (
    <div>
      <h1>Página de inicio</h1>

      {isAuthenticated ? (
        <div>
          <h2>¡Usuario autenticado!</h2>

          <p>
            <strong>Nombre:</strong> {user?.firstName} {user?.lastName}
          </p>

          <p>
            <strong>Email:</strong> {user?.email}
          </p>

          <p>
            <strong>Rol:</strong> {user?.role}
          </p>

          <p>
            <strong>ID:</strong> {user?.id}
          </p>
        </div>
      ) : (
        <h2>No hay ningún usuario autenticado</h2>
      )}
    </div>
  );
};

export default Home;

