package com.ololos.dao;

import com.ololos.domain.Author;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@Repository
@RepositoryRestResource
public interface AuthorRepository extends MongoRepository<Author, String> {
}
