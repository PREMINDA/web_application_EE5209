package com.example.backend.dto;

import com.example.backend.domian.user.User;

public class UserDTO {
    private Long id;
    private String name;
    private String email;

    public UserDTO(User client) {
        id = client.getId();
        name = client.getUsername();
        email = client.getEmail();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
