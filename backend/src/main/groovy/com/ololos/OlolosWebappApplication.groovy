package com.ololos

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.autoconfigure.session.SessionAutoConfiguration

@SpringBootApplication(exclude = SessionAutoConfiguration.class)
class OlolosWebappApplication {

    static void main(String[] args) {
        SpringApplication.run(OlolosWebappApplication.class, args)
    }
}
