package com.codegym.Service.impl;

import com.codegym.Model.PostEntity;
import com.codegym.Repository.PostRepository;
import com.codegym.Service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public class PostServiceImpl implements PostService {

    @Autowired
    private PostRepository postRepository;


    @Override
    public List<PostEntity> findAll() {
        return postRepository.findAll();
    }

    @Override
    public PostEntity findById(Long id) {
        return postRepository.findById(id);
    }

    @Override
    public void save(PostEntity postEntity) {
        postRepository.save(postEntity);
    }

    @Override
    public void remove(Long id) {
        postRepository.remove(id);
    }
}
