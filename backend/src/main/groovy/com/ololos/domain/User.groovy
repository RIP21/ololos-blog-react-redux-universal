package com.ololos.domain

import com.fasterxml.jackson.annotation.JsonIgnore
import groovy.transform.TupleConstructor
import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document
import org.springframework.security.core.authority.SimpleGrantedAuthority

@Document(collection = "users")
@TupleConstructor
class User {

    @Id
    String id
    String username

    @JsonIgnore
    String password

    List<SimpleGrantedAuthority> roles

    @JsonIgnore
    String getPassword() {
        return password
    }

    void setPassword(String password) {
        this.password = password
    }
}
