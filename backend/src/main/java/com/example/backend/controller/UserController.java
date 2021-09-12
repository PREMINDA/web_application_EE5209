package com.example.backend.controller;

import com.example.backend.constatnt.user.SecurityConstant;
import com.example.backend.domian.HttpResponse;
import com.example.backend.domian.user.User;
import com.example.backend.domian.user.UserPrinciple;
import com.example.backend.exception.domain.user.EmailExistException;
import com.example.backend.exception.domain.user.ExceptionHandling;
import com.example.backend.exception.domain.user.UserNameExistException;
import com.example.backend.exception.domain.user.UserNotFoundException;
import com.example.backend.service.userservice.UserService;
import com.example.backend.utility.JWTTokenProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;
import java.util.Locale;

@RestController
@RequestMapping(path = {"/","/user"})
public class UserController extends ExceptionHandling {

    private final UserService userService;
    private final AuthenticationManager authenticationManager;
    private final JWTTokenProvider jwtTokenProvider;

    @Autowired
    public UserController(UserService userService, AuthenticationManager authenticationManager, JWTTokenProvider jwtTokenProvider) {
        this.userService = userService;
        this.authenticationManager = authenticationManager;
        this.jwtTokenProvider = jwtTokenProvider;
    }

    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody User user) throws EmailExistException, UserNotFoundException, UserNameExistException {
        authenticate(user.getUsername(),user.getPassword());
        User loginUser = userService.findUserByUsername(user.getUsername());
        UserPrinciple userPrinciple = new UserPrinciple(loginUser);
        HttpHeaders jwtHeader = getJwtHeader(userPrinciple);
        return new ResponseEntity<>(loginUser,jwtHeader, HttpStatus.OK);
    }

    @PostMapping("/register")
    public ResponseEntity<User> register(@RequestBody User user) throws EmailExistException, UserNotFoundException, UserNameExistException {

        User newUser =  userService.register(user.getFirstName(),user.getLastName(),user.getUsername(),user.getPassword(),user.getEmail());

        return new ResponseEntity<>(newUser, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<User> addNewUser(@RequestBody User user) throws UserNotFoundException, EmailExistException, UserNameExistException, IOException {
        User newUser = userService.addNewUser(user.getFirstName(), user.getLastName(), user.getUsername(),user.getEmail(),user.getPassword(), user.getRole());
        return new ResponseEntity<>(newUser,HttpStatus.OK);
    }

    @PostMapping("/update")
    public ResponseEntity<User> update(    @RequestParam("currentName") String currentName,
                                           @RequestParam("firstName") String firstName,
                                           @RequestParam("lastName") String lastName,
                                           @RequestParam("userName") String userName,
                                           @RequestParam("email") String email,
                                           @RequestParam("role") String role,
                                           @RequestParam("isActive") String isActive,
                                           @RequestParam("isNonLocked") String isNonLocked

    ) throws UserNotFoundException, EmailExistException, UserNameExistException, IOException {
        User updateUser = userService.updateUser(currentName,firstName,lastName,userName,email,role,Boolean.parseBoolean(isNonLocked),Boolean.parseBoolean(isActive));
        return new ResponseEntity<>(updateUser,HttpStatus.OK);
    }

    @GetMapping("/list")
    public ResponseEntity<List<User>> getAllUser(){
        List<User> users = userService.getUsers();
        return new ResponseEntity<>(users,HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    @PreAuthorize("hasAnyAuthority('user:delete')")
    public ResponseEntity<HttpResponse> deleteUser(@PathVariable("id") long id){
        userService.deleteUser(id);
        return response(HttpStatus.NO_CONTENT,"User Deleted successfully");
    }

    private ResponseEntity<HttpResponse> response(HttpStatus httpStatus, String message) {
        return new ResponseEntity<>(new HttpResponse(httpStatus.value(),httpStatus,httpStatus.getReasonPhrase().toUpperCase(),message.toUpperCase(Locale.ROOT)),httpStatus);
    }


    private HttpHeaders getJwtHeader(UserPrinciple user) {
        HttpHeaders headers = new HttpHeaders();
        headers.add(SecurityConstant.JWT_TOKE_HEADER,jwtTokenProvider.generateJwtToken(user));
        return headers;
    }

    private void authenticate(String username, String password) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username,password));
    }

}
