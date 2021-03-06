package com.ololos.api

import com.ololos.model.Credentials
import com.ololos.model.User
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.security.authentication.AuthenticationManager
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.core.Authentication
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod
import org.springframework.web.bind.annotation.RestController

import javax.servlet.http.HttpSession

@RestController
@RequestMapping("/session")
class AuthenticationResource {

    private AuthenticationManager authenticationManager

    @Autowired
    AuthenticationResource(AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager
    }


    @RequestMapping(method = RequestMethod.POST)
    User login(@RequestBody Credentials credentials, HttpSession httpSession) {
        Authentication authentication = new UsernamePasswordAuthenticationToken(credentials.getUsername(), credentials.getPassword())
        SecurityContextHolder.getContext().setAuthentication(authenticationManager.authenticate(authentication))

        User user = new User(credentials.getUsername(), httpSession.getId(), true)
        httpSession.setAttribute("user", user)
        return user
    }

    @RequestMapping(method = RequestMethod.GET)
    Object session(HttpSession session) {
        return session.getAttribute("user")
    }

    @RequestMapping(method = RequestMethod.DELETE)
    void logout(HttpSession session) {
        session.invalidate()
    }
}
