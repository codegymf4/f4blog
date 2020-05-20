package com.codegym.Controller;

import com.codegym.Model.PostEntity;
import com.codegym.Service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.List;

@CrossOrigin("*")
@RestController
public class PostController {

    //--------------------------TOAN----------------------

    //--------------------------TIEN----------------------

    //--------------------------TU----------------------

    //--------------------------DUNG----------------------
    @Autowired
    private PostService postService;

    //-------------------Retrieve All
    @RequestMapping(value = "/posts/", method = RequestMethod.GET)
    public ResponseEntity<List<PostEntity>> listAllPosts() {
        List<PostEntity> postEntities = postService.findAll();
        if (postEntities.isEmpty()) {
            return new ResponseEntity<List<PostEntity>>(HttpStatus.NO_CONTENT);//You many decide to return HttpStatus.NOT_FOUND
        }
        return new ResponseEntity<List<PostEntity>>(postEntities, HttpStatus.OK);
    }

    //-------------------Retrieve Single
    @RequestMapping(value = "/posts/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<PostEntity> getPost(@PathVariable("id") long id) {
        System.out.println("Fetching Post with id " + id);
        PostEntity postEntity = postService.findById(id);
        if (postEntity == null) {
            System.out.println("Post with id " + id + " not found");
            return new ResponseEntity<PostEntity>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<PostEntity>(postEntity, HttpStatus.OK);
    }

    //-------------------Create
    @RequestMapping(value = "/posts/", method = RequestMethod.POST)
    public ResponseEntity<Void> createPost(@RequestBody PostEntity postEntity, UriComponentsBuilder ucBuilder) {
        System.out.println("Creating Post " + postEntity.getTitle());
        postService.save(postEntity);
        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(ucBuilder.path("/posts/{id}").buildAndExpand(postEntity.getId()).toUri());
        return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
    }

    //------------------- Update
    @RequestMapping(value = "/posts/{id}", method = RequestMethod.PUT)
    public ResponseEntity<PostEntity> updatePost(@PathVariable("id") Long id, @RequestBody PostEntity postEntity) {
        System.out.println("Updating Post " + id);

        PostEntity currentPostEntity = postService.findById(id);

        if (currentPostEntity == null) {
            System.out.println("Post with id " + id + " not found");
            return new ResponseEntity<PostEntity>(HttpStatus.NOT_FOUND);
        }

        currentPostEntity.setId(postEntity.getId());
        currentPostEntity.setTitle(postEntity.getTitle());
        currentPostEntity.setPublishedStatus(postEntity.getPublishedStatus());
        currentPostEntity.setPublishTime(postEntity.getPublishTime());
        currentPostEntity.setCreatedAt(postEntity.getCreatedAt());
        currentPostEntity.setUpdatedAt(postEntity.getUpdatedAt());
        currentPostEntity.setContent(postEntity.getContent());
        currentPostEntity.setCommentsById(postEntity.getCommentsById());
        currentPostEntity.setUserByUserId(postEntity.getUserByUserId());
        currentPostEntity.setCategoryEntityList(postEntity.getCategoryEntityList());
        currentPostEntity.setTagEntityList(postEntity.getTagEntityList());
        currentPostEntity.setPostLikesById(postEntity.getPostLikesById());

        postService.save(currentPostEntity);
        return new ResponseEntity<PostEntity>(currentPostEntity, HttpStatus.OK);
    }

    //------------------- Delete
    @RequestMapping(value = "/posts/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<PostEntity> deletePost(@PathVariable("id") Long id) {
        System.out.println("Fetching & Deleting Post with id " + id);

        PostEntity postEntity = postService.findById(id);
        if (postEntity == null) {
            System.out.println("Unable to delete. Post with id " + id + " not found");
            return new ResponseEntity<PostEntity>(HttpStatus.NOT_FOUND);
        }

        postService.remove(id);
        return new ResponseEntity<PostEntity>(HttpStatus.NO_CONTENT);
    }

}
