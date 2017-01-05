package com.ololos.api

import com.ololos.AbstractMvcSpec
import com.ololos.dao.AuthorRepository
import com.ololos.dao.PostRepository
import com.ololos.domain.Author
import com.ololos.domain.Post
import org.springframework.beans.factory.annotation.Autowired

class PostResourceSpec extends AbstractMvcSpec {

    @Autowired
    AuthorRepository authorRepository
    @Autowired
    PostRepository postRepository

    void setup() {
        Author first = new Author("RIP21", "Andrii Los")
        Author second = new Author("LINA", "Lina Oleynik")
        authorRepository.save(first)
        authorRepository.save(second)
        postRepository.save(new Post("title-1","title 1", first , "# Somebody post 1", "#Descr 1", "previewPic 1", new Date(), new Date(), true))
        postRepository.save(new Post("title-2","title 2", second, "# Somebody post 2", "# Descr 2", "previewPic 2" ,new Date(), new Date(), true))
        postRepository.save(new Post("title-3","title 3", second, "# Somebody post 3", "# Descr 3", "previewPic 3" ,new Date(), new Date(), false))
    }

    def "Paginate with filtering by published flag"() {
        when:
            def response1 = get('/posts/search/published?published=true&size=1&page=0')
            def response2 = get('/posts/search/published?published=true&size=1&page=1')
        then:
            response1.json._embedded.posts.size() == 1
            response1.json._embedded.posts[0].id == "title-1"
            response2.json._embedded.posts.size() == 1
            response2.json._embedded.posts[0].id == "title-2"
    }
}
