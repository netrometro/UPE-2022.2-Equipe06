package com.ecommerce.backendcommerce.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;



public class Anuncio {

    @Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Midia {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    private String nome;
    private String descricao;
    private String imagem;
    private int preco;
    }
}