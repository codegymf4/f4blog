package com.codegym.Service;

import com.codegym.Model.PostEntity;

import java.util.List;

public interface PostService  {
    List<PostEntity> findAll();

    PostEntity findById(Long id);

    void save(PostEntity postEntity);

    void remove(Long id);

}
