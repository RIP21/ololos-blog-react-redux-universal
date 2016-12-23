package com.ololos.mongo

import com.ololos.AbstractMvcSpec
import com.ololos.dao.AuthorRepository
import com.ololos.dao.PostRepository
import com.ololos.dao.UserRepository
import com.ololos.domain.Author
import com.ololos.domain.Post
import com.ololos.domain.User
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.security.core.authority.SimpleGrantedAuthority
/**
 * Created by Andrii_Los on 10/17/2016.
 */

class MongoTestDataInserting extends AbstractMvcSpec {

    @Autowired
    AuthorRepository authorRepository;
    @Autowired
    PostRepository postRepository;
    @Autowired
    UserRepository userRepository;

    def "Insert test data"() {
        given:
            userRepository.deleteAll()
            postRepository.deleteAll()
            authorRepository.deleteAll()
        when:
            userRepository.save(new User("RIP21", "RIP21", "pass", [new SimpleGrantedAuthority("ADMIN")]))
            userRepository.save(new User("LINA", "LINA", "pass", [new SimpleGrantedAuthority("ADMIN")]))
            Author first = new Author("RIP21", "Andrii Los")
            Author second = new Author("LINA", "Lina Oleynik")
            authorRepository.save(first)
            authorRepository.save(second)
            postRepository.save(new Post("title-1","title 1", "# Somebody post 1", new Date(), first))
            postRepository.save(new Post("title-2","title 2", "# Somebody post 2", new Date(), second))

        then:
            userRepository.findAll().size() == 2;
            postRepository.findAll().size() == 2;
            authorRepository.findAll().size() == 2;


    }
}
