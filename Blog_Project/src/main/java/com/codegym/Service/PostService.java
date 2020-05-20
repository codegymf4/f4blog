package com.codegym.Service;

import com.codegym.Model.PostEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface PostService  {
    List<PostEntity> findAll();

    PostEntity findById(Long id);

    void save(PostEntity postEntity);

    void remove(Long id);
}
