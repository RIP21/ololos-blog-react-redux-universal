package com.ololos.dao;

import com.ololos.domain.Post;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

@RepositoryRestResource
public interface PostRepository extends PagingAndSortingRepository<Post, String> {

    @RestResource(path = "/published")
    Page<Post> findByPublished(@Param("published") Boolean published, Pageable pageable);

}
