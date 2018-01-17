package com.revature.Tapestry.DatabaseAccessors;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.Tapestry.beans.User;

@Repository
public interface UserDAO extends JpaRepository<User,Integer>{
	List<User> findByUsername(String username); 
	User findByEmail(String email);
}
