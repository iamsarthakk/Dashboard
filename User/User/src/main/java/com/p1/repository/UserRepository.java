package com.p1.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.p1.entity.User;

@Repository
public interface UserRepository extends CrudRepository<User, Long>{

}
