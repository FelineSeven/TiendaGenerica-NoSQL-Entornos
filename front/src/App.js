import { useState } from "react";
import Login from "./components/Login";
import UsuarioList from "./components/UsuarioList";
import UsuarioForm from "./components/UsuarioForm";

function App() {
  const [usuarioLogueado, setUsuarioLogueado] = useState(JSON.parse(localStorage.getItem("usuario")));
  const [usuarioEditar, setUsuarioEditar] = useState(null);

  if (!usuarioLogueado) return <Login onLogin={setUsuarioLogueado} />;

  return (
    <div>
      <h1>Bienvenido, {usuarioLogueado.nombre}</h1>
      <button onClick={() => { localStorage.removeItem("usuario"); setUsuarioLogueado(null); }}>Cerrar sesión</button>
      <UsuarioForm usuario={usuarioEditar} onSave={() => setUsuarioEditar(null)} />
      <UsuarioList onEdit={setUsuarioEditar} />
    </div>
  );
}

export default App;
