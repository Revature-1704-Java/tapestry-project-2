package com.revature.Tapestry.DatabaseAccessors;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.Tapestry.beans.Comment;

@Repository
public interface CommentDAO extends JpaRepository<Comment,Integer>{

}