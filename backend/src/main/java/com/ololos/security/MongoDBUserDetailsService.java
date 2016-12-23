package com.ololos.security;

import com.ololos.dao.UserRepository;
import com.ololos.domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.InternalAuthenticationServiceException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class MongoDBUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;

    @Autowired
    public MongoDBUserDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserDetails loadedUser;
        try {
            User user = userRepository.findOne(username);
            loadedUser = new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), user.getRoles());
        } catch (Exception repositoryProblem) {
            throw new InternalAuthenticationServiceException(repositoryProblem.getMessage(), repositoryProblem);
        }
        return loadedUser;
    }


}


