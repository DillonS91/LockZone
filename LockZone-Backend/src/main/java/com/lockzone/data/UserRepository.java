package com.lockzone.data;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lockzone.beans.User;

public interface UserRepository extends JpaRepository<User, String>{

}
