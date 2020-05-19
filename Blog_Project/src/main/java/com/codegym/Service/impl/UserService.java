package com.codegym.Service.impl;

import com.codegym.Model.UserEntity;
import com.codegym.MyUtil.MyUtil;
import com.codegym.Repository.IUserRepo;
import com.codegym.Service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class UserService implements IUserService {
    @Autowired
    IUserRepo userRepo;

    public List<UserEntity> findAll() {
        List<UserEntity> list = (List<UserEntity>) this.userRepo.findAll();
        return list;
    }

    public void delete(Long id) {
        this.userRepo.delete(id);
    }

    public void save(UserEntity userEntity) {
        userEntity.setPassword(MyUtil.passwordEncoder().encode(userEntity.getPassword()));
        this.userRepo.save(userEntity);
    }
}
