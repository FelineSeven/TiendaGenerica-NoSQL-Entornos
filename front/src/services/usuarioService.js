const API_URL = "http://localhost:8080/api/usuarios";

export const login = async (nombreUsuario, password) => {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombreUsuario, password })
  });
  return response.json();
};

export const listarUsuarios = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

export const crearUsuario = async (usuario) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(usuario)
  });
  return response.json();
};

export const actualizarUsuario = async (id, usuario) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(usuario)
  });
  return response.json();
};

export const eliminarUsuario = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  return response.ok;
};
