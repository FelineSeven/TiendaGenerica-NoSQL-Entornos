/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.tienda.tiendagenerica.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;
/**
 *
 * @author Portatil
 */

@Data
@Document(collection = "usuario")
public class Usuario {
    
    @Id
    private String id;
    private int idTipoDocumento;
    private String numeroDocumento;
    private String email;
    private String nombre;
    private String password;
    private String nombreUsuario;
}
