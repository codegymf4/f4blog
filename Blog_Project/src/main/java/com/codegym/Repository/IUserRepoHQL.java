package com.codegym.Repository;

import com.codegym.Model.UserEntity;

public interface IUserRepoHQL {
    UserEntity findByUserName(String userName);
}
