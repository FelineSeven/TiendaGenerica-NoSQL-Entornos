import { useState } from "react";
import { login } from "../services/usuarioService";

export default function Login({ onLogin }) {
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const usuario = await login(nombreUsuario, password);
      if (usuario && usuario.id) {
        localStorage.setItem("usuario", JSON.stringify(usuario));
        onLogin(usuario);
      } else {
        setError("Usuario o contraseña incorrectos");
      }
    } catch (err) {
      setError("Error de conexión al servidor");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Usuario"
          value={nombreUsuario}
          onChange={(e) => setNombreUsuario(e.target.value)}
        />
        <input
          placeholder="Contraseña"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Ingresar</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

