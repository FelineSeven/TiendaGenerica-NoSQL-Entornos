/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.tienda.tiendagenerica.repository;

import com.tienda.tiendagenerica.model.Usuario;
import org.springframework.data.mongodb.repository.MongoRepository;
/**
 *
 * @author Portatil
 */
public interface UsuarioRepository extends MongoRepository<Usuario, String>{
    Usuario findByNombreUsuario(String nombreUsuario);
}
