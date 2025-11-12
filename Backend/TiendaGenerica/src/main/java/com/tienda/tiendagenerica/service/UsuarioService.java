/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.tienda.tiendagenerica.service;

import com.tienda.tiendagenerica.model.Usuario;
import com.tienda.tiendagenerica.repository.UsuarioRepository;
import org.springframework.stereotype.Service;
import java.util.List;
/**
 *
 * @author Portatil
 */

@Service
public class UsuarioService {
    private final UsuarioRepository repo;

    public UsuarioService(UsuarioRepository repo) {
        this.repo = repo;
    }

    public List<Usuario> listar() {
        return repo.findAll();
    }

    public Usuario buscar(String id) {
        return repo.findById(id).orElse(null);
    }

    public Usuario guardar(Usuario usuario) {
        return repo.save(usuario);
    }

    public void eliminar(String id) {
        repo.deleteById(id);
    }

    public Usuario login(String nombreUsuario, String password) {
        Usuario u = repo.findByNombreUsuario(nombreUsuario);
        return (u != null && u.getPassword().equals(password)) ? u : null;
    }
}
