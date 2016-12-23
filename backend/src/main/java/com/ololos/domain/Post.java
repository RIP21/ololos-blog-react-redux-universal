package com.ololos.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

@Document(collection = "posts")
@Data @AllArgsConstructor @NoArgsConstructor
public class Post {

    @Id
    private String id;
    private String title;
    private String body;
    private String description;
    private String previewPic;
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
    private Date postdate;
    private Author author;

}
