package com.example.backend.exception.domain.user;

public class UserNameExistException extends Exception {

    public UserNameExistException(String message) {
        super(message);
    }
}
