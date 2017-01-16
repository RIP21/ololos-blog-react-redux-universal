package com.ololos.dao

import com.ololos.domain.User
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.data.rest.core.annotation.RepositoryRestResource

@RepositoryRestResource
interface UserRepository extends MongoRepository<User, String> {
}
