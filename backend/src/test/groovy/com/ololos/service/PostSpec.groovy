package com.ololos.service

import com.ololos.OlolosWebappApplication
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.SpringApplicationConfiguration
import spock.lang.Specification
/**
 * Created by puha2 on 23.10.2016.
 */
@SpringApplicationConfiguration(classes = OlolosWebappApplication.class)
class PostSpec extends Specification {

    @Autowired
    PostService postService

    def "ID setter remove all special characters and form proper ID"() {
        given: "String with special symbols, latin/cyrillic symbols combined"
            String given = "&%##@!@#-/***/Привет Как Дела йййй -----Title Normal_One, Shit*((*)(*)( post, crap&*(*&(*&(*%"

        when: "Should transliterate cyrillic, remove special symbols and trailing/multi spaces, and then replace them with '-'"
            def result = postService.generateIdFromTheTitle(given)
        then:
            result == "privet-kak-dela-jjjj-title-normal-one-shit-post-crap"
    }
}
