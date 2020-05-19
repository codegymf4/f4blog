package com.codegym.Service;

import com.codegym.Model.UserEntity;

import java.util.List;

public interface IUserService {
    List<UserEntity> findAll();

    void delete(Long id);

    void save(UserEntity userEntity);

}
