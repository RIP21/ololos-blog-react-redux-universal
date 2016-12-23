package com.ololos.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "authors")
@Data @AllArgsConstructor
public class Author {

    @Id
    private String id;
    private String authorName;

}
