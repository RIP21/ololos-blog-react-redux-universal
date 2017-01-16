package com.ololos.config

import org.springframework.context.annotation.Bean
import org.springframework.session.data.mongo.JdkMongoSessionConverter
import org.springframework.session.data.mongo.config.annotation.web.http.EnableMongoHttpSession

@EnableMongoHttpSession
class ExternalMongoConfig {

    @Bean
    JdkMongoSessionConverter jdkMongoSessionConverter() {
        return new JdkMongoSessionConverter()
    }

}
