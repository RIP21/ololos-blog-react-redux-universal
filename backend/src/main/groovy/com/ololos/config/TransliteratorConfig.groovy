package com.ololos.config

import com.ibm.icu.text.Transliterator
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

@Configuration
class TransliteratorConfig {

    @Bean
    Transliterator cyrillicTransliterator() {
        return Transliterator.getInstance("Any-Latin;")
    }

}
