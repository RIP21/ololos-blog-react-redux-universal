package com.ololos.model

class User implements Serializable {
    private String userName
    private String token
    private boolean authenticated

    User(String userName, String token, boolean authenticated) {
        this.userName = userName
        this.token = token
        this.authenticated = authenticated
    }

    String getUserName() {
        return userName
    }

    String getToken() {
        return token
    }

    boolean isAuthenticated() {
        return authenticated
    }
}
