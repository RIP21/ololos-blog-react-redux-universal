package com.ololos.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.List;

@Document(collection = "users")
@AllArgsConstructor @NoArgsConstructor
public class User {

    @Id @Getter @Setter
    private String id;
    @Getter @Setter
    private String username;

    @JsonIgnore
    private String password;

    @Getter @Setter
    private List<SimpleGrantedAuthority> roles;

    @JsonIgnore
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
