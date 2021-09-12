package com.example.backend.service.userservice;

import com.example.backend.domian.user.User;
import com.example.backend.exception.domain.user.EmailExistException;
import com.example.backend.exception.domain.user.UserNameExistException;
import com.example.backend.exception.domain.user.UserNotFoundException;

import java.io.IOException;
import java.util.List;

public interface UserService {
    User register(String firstName, String lastName, String Password, String username, String email) throws UserNotFoundException, EmailExistException, UserNameExistException;

    List<User> getUsers();

    User findUserByUsername(String username);

    User findUserByEmail(String email);

    User addNewUser(String firstName, String lastName, String username, String email,String password, String role) throws UserNotFoundException, EmailExistException, UserNameExistException, IOException;

    User updateUser(String currentName,String firstName, String lastName, String username, String email, String role, boolean isNonLocked, boolean isActive) throws UserNotFoundException, EmailExistException, UserNameExistException, IOException;

    void deleteUser(long id);


}