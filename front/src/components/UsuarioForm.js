import { useState, useEffect } from "react";
import { crearUsuario, actualizarUsuario } from "../services/usuarioService";

export default function UsuarioForm({ usuario, onSave }) {
  const [form, setForm] = useState({ nombre: "", nombreUsuario: "", email: "", password: "" });

  useEffect(() => {
    if (usuario) setForm(usuario);
  }, [usuario]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (usuario) await actualizarUsuario(usuario.id, form);
    else await crearUsuario(form);
    onSave();
    setForm({ nombre: "", nombreUsuario: "", email: "", password: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="nombre" placeholder="Nombre" value={form.nombre} onChange={handleChange} />
      <input name="nombreUsuario" placeholder="Usuario" value={form.nombreUsuario} onChange={handleChange} />
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
      <input name="password" placeholder="Contraseña" type="password" value={form.password} onChange={handleChange} />
      <button type="submit">{usuario ? "Actualizar" : "Crear"}</button>
    </form>
  );
}
