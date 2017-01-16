package com.ololos.domain

import groovy.transform.TupleConstructor
import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document
import org.springframework.format.annotation.DateTimeFormat

@Document(collection = "posts")
@TupleConstructor
class Post {

    @Id
    String id
    String title
    Author author
    String body
    String description
    String previewPic
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
    Date postdate
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
    Date editDate
    Boolean published

}
