package com.ololos.domain

import groovy.transform.TupleConstructor
import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document

@Document(collection = "authors")
@TupleConstructor
class Author {

    @Id
    String id
    String authorName
    String userPic
    String description

}
