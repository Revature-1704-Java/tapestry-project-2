package com.revature.Tapestry.DatabaseAccessors;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.Tapestry.beans.Post;

@Repository
public interface PostDAO extends JpaRepository<Post,Integer>{

}
