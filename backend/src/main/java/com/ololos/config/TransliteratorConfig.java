package com.ololos.config;

import com.ibm.icu.text.Transliterator;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class TransliteratorConfig {

    @Bean
    public Transliterator cyrillicTransliterator() {
        return Transliterator.getInstance("Any-Latin;");
    }

}
