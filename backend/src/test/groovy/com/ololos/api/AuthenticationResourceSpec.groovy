package com.ololos.api

import com.ololos.AbstractMvcSpec
import com.ololos.dao.UserRepository
import com.ololos.domain.User
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.security.core.authority.SimpleGrantedAuthority
import spock.lang.Shared
import spock.lang.Stepwise
import spockmvc.RequestParams

import javax.servlet.http.Cookie

@Stepwise
class AuthenticationResourceSpec extends AbstractMvcSpec {

    @Autowired
    UserRepository userRepository

    def setup() {
      userRepository.save(new User("RIP21", "RIP21", "pass", [new SimpleGrantedAuthority("ADMIN")]))
    }

    @Shared
    String token

    def "bad authentication"() {
        given:
            def credentials = [username: 'user', password: 'badpassword']

        when:
            def res = post('/api/session', credentials)

        then:
            res.status == HttpStatus.UNAUTHORIZED
    }

    def "good authentication"() {
        given:
            def credentials = [username: 'RIP21', password: 'pass']

        when:
            def res = post('/api/session', credentials)
            token = res.json.token

        then:
            res.status == HttpStatus.OK
            res.json.userName == 'RIP21'
            token != null
    }

    def "get session"() {
        when:
            def res = get('/api/session', new RequestParams(cookies: [new Cookie("SESSION", token)]))

        then:
            res.status == HttpStatus.OK
            res.json.userName == 'RIP21'
    }

    def "delete session"() {
        when:
            def res = delete('/api/session', new RequestParams(cookies: [new Cookie("SESSION", token)]))

        then:
            res.status == HttpStatus.OK

        when:
            res = get('/api/session', new RequestParams(cookies: [new Cookie("SESSION", token)]))

        then:
            res.status == HttpStatus.OK
            res.content.isEmpty()
    }
}
