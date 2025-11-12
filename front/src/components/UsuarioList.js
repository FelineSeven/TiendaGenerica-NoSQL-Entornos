import { useEffect, useState } from "react";
import { listarUsuarios, eliminarUsuario } from "../services/usuarioService";

export default function UsuarioList({ onEdit }) {
  const [usuarios, setUsuarios] = useState([]);

  const cargarUsuarios = async () => {
    const data = await listarUsuarios();
    setUsuarios(data);
  };

  useEffect(() => {
    cargarUsuarios();
  }, []);

  const handleEliminar = async (id) => {
    if (window.confirm("¿Eliminar usuario?")) {
      await eliminarUsuario(id);
      cargarUsuarios();
    }
  };

  return (
    <div>
      <h2>Usuarios</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Usuario</th>
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((u) => (
            <tr key={u.id}>
              <td>{u.nombre}</td>
              <td>{u.nombreUsuario}</td>
              <td>{u.email}</td>
              <td>
                <button onClick={() => onEdit(u)}>Editar</button>
                <button onClick={() => handleEliminar(u.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
