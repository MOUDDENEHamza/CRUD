package com.example.demo.persistence.repository;

import com.example.demo.persistence.entity.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BasicRepositoryUser extends CrudRepository<User, Long> {
}
