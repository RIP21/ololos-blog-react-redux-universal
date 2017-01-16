package com.ololos.dao

import com.ololos.domain.Author
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.data.rest.core.annotation.RepositoryRestResource

@RepositoryRestResource
interface AuthorRepository extends MongoRepository<Author, String> {
}
