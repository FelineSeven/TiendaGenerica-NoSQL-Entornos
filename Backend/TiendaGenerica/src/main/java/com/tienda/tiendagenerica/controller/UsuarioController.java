/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.tienda.tiendagenerica.controller;

import com.tienda.tiendagenerica.model.Usuario;
import com.tienda.tiendagenerica.service.UsuarioService;
import org.springframework.web.bind.annotation.*;
import java.util.List;
/**
 *
 * @author Portatil
 */
@RestController
@RequestMapping("/api/usuarios")
@CrossOrigin("*")
public class UsuarioController {

    private final UsuarioService service;

    public UsuarioController(UsuarioService service) {
        this.service = service;
    }

    @GetMapping
    public List<Usuario> listar() {
        return service.listar();
    }

    @GetMapping("/{id}")
    public Usuario buscar(@PathVariable String id) {
        return service.buscar(id);
    }

    @PostMapping
    public Usuario guardar(@RequestBody Usuario usuario) {
        return service.guardar(usuario);
    }

    @PutMapping("/{id}")
    public Usuario actualizar(@PathVariable String id, @RequestBody Usuario usuario) {
        usuario.setId(id);
        return service.guardar(usuario);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable String id) {
        service.eliminar(id);
    }

    @PostMapping("/login")
    public Usuario login(@RequestBody Usuario usuario) {
        return service.login(usuario.getNombreUsuario(), usuario.getPassword());
    }
}
