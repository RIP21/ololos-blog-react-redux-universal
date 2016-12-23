package com.ololos.dao;

import com.ololos.domain.Post;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RepositoryRestResource
public interface PostRepository extends MongoRepository<Post, String> {

    List<Post> findByTitle(String title);

}
