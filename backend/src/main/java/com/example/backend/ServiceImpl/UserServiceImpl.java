package com.example.backend.ServiceImpl;

import com.example.backend.domian.user.User;
import com.example.backend.domian.user.UserPrinciple;
import com.example.backend.enumeration.Role;
import com.example.backend.exception.domain.user.EmailExistException;
import com.example.backend.exception.domain.user.UserNameExistException;
import com.example.backend.exception.domain.user.UserNotFoundException;
import com.example.backend.repository.UserRepository;
import com.example.backend.service.LoginAttemptService;
import com.example.backend.service.userservice.UserService;
import org.apache.commons.lang3.RandomStringUtils;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.io.IOException;
import java.util.Date;
import java.util.List;

@Service
@Transactional
@Qualifier("userDetailsService")
public class UserServiceImpl implements UserService, UserDetailsService {

    private Logger LOGGER = LoggerFactory.getLogger(getClass());

    private UserRepository userRepository;
    private BCryptPasswordEncoder bCryptPasswordEncoder;
    private LoginAttemptService loginAttemptService;

    @Autowired
    public UserServiceImpl(UserRepository userRepository,BCryptPasswordEncoder bCryptPasswordEncoder,LoginAttemptService loginAttemptService) {
        this.userRepository = userRepository;
        this.bCryptPasswordEncoder=bCryptPasswordEncoder;
        this.loginAttemptService = loginAttemptService;

    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findUserByUsername(username);

        if(user == null){
            LOGGER.error("User Not Found by Username" + username);
            throw new UsernameNotFoundException("User Not Found by Username" + username);
        }else{
            validateLoginAttempt(user);
            user.setLastLogindateDisplay(user.getLastLoginDate());
            user.setLastLoginDate(new Date());
            userRepository.save(user);
            UserPrinciple userPrinciple = new UserPrinciple(user);
            LOGGER.info("Returning found user by username : "+ username);

            return userPrinciple;
        }

    }

    @Override
    public User register(String firstName, String lastName, String username,String password, String email) throws UserNotFoundException, EmailExistException, UserNameExistException {
        validateNewUsernameAndEmail(StringUtils.EMPTY,username,email);
        User user = new User();
        user.setUserId(generateUserId());
        String encodePassword = encoddePassword(password);
        user.setFirstName(firstName);
        user.setLastName(lastName);
        user.setUsername(username);
        user.setEmail(email);
        user.setJoinDate(new Date());
        user.setPassword(encodePassword);
        user.setActive(true);
        user.setNotLocked(true);
        user.setRole(Role.ROLE_SUPER_ADMIN.name());
        user.setAuthorities(Role.ROLE_SUPER_ADMIN.getAuthorities());
        System.out.println(password);
        userRepository.save(user);
        return user;
    }

    @Override
    public User addNewUser(String firstName, String lastName, String username, String email,String password, String role) throws UserNotFoundException, EmailExistException, UserNameExistException {
        validateNewUsernameAndEmail(StringUtils.EMPTY,username,email);
        User user = new User();
        user.setUserId(generateUserId());
        String encodePassword = encoddePassword(password);
        user.setFirstName(firstName);
        user.setLastName(lastName);
        user.setUsername(username);
        user.setEmail(email);
        user.setJoinDate(new Date());
        user.setPassword(encodePassword);
        user.setActive(true);
        user.setNotLocked(true);
        user.setRole(getRoleEnumName(role).name());
        user.setAuthorities(getRoleEnumName(role).getAuthorities());
        userRepository.save(user);
        return user;
    }

    @Override
    public User editUser(User user) throws UserNotFoundException, EmailExistException, UserNameExistException, IOException {
        User editUser = userRepository.findById(user.getId()).get();
        System.out.println(user);
        editUser.setNotLocked(user.isNotLocked());
        editUser.setRole(getRoleEnumName(user.getRole()).name());
        editUser.setAuthorities(getRoleEnumName(user.getRole()).getAuthorities());
        userRepository.save(editUser);
        return editUser;
    }

    @Override
    public List<User> getUsers() {

        return userRepository.findAll();

    }



    @Override
    public User findUserByUsername(String username) {
        return userRepository.findUserByUsername(username);
    }

    @Override
    public User findUserByEmail(String email) {
        return userRepository.findUserByEmail(email);
    }

    @Override
    public void deleteUser(long id) {
        userRepository.deleteById(id);
    }

    private void validateLoginAttempt(User user) {
        if(user.isNotLocked()){
            if(loginAttemptService.hasExceededMaxAttempt(user.getUsername())){
                user.setNotLocked(false);
            }else{
                user.setNotLocked(true);
            }
        }else{
            loginAttemptService.evictUserFromLoginAttemptCache(user.getUsername());
        }
    }

    private String encoddePassword(String password) {
        return bCryptPasswordEncoder.encode(password);
    }

    private String generateUserId() {
        return RandomStringUtils.randomNumeric(10);
    }

    private User validateNewUsernameAndEmail(String currentUsername,String newUsername,String email) throws UserNotFoundException, UserNameExistException, EmailExistException {

        if(StringUtils.isNotBlank(currentUsername)){
            User currentUser = findUserByUsername(currentUsername);
            if (currentUser==null){
                throw new UserNotFoundException("No user found by username "+currentUsername);
            }
            User userByNewUsername = findUserByUsername(newUsername);
            if(userByNewUsername != null && !currentUser.getUserId().equals(userByNewUsername.getUserId())){
                throw new UserNameExistException("Username already exists");
            }
            User userByNewEmail = findUserByEmail(email);
            if(userByNewEmail != null && !currentUser.getUserId().equals(userByNewEmail.getUserId())){
                throw new EmailExistException("Email already Taken");
            }

            return currentUser;
        }else{
            User userByUsername = findUserByUsername(newUsername);
            if(userByUsername != null){
                throw new UserNameExistException("Username already exists");
            }
            User userByEmail = findUserByEmail(email);
            if(userByEmail != null){
                throw new EmailExistException("Email already Taken");
            }
            return null;
        }
    }

    private Role getRoleEnumName(String role) {
        return Role.valueOf(role.toUpperCase());
    }

}
