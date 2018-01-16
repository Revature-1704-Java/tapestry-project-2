package com.revature.Tapestry.Controllers;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.revature.Tapestry.DatabaseAccessors.BoardDAO;
import com.revature.Tapestry.DatabaseAccessors.PostDAO;
import com.revature.Tapestry.beans.Comment;
import com.revature.Tapestry.beans.Post;
import com.revature.Tapestry.beans.User;

@RestController
public class PostController {

	private PostDAO postDao;
	private BoardDAO boardDao;
	
	public PostController(PostDAO postDao, BoardDAO boardDao) {
		this.postDao = postDao;
		this.boardDao = boardDao;
	}
	
	//Get All Posts in DB, return as JSON
	@GetMapping(value="/getPosts", produces=MediaType.APPLICATION_JSON_VALUE)
	public List<Post> getPosts() {
		return postDao.findAll().stream().collect(Collectors.toList());
	}	
	
	
	@PostMapping(value="/createThread", consumes=MediaType.APPLICATION_JSON_VALUE)
	public void createThread(@RequestBody Post post) {
		System.out.println(post.toString());
		//postDao.save(post);
	}
	
	@PostMapping(value="/createReply", consumes=MediaType.APPLICATION_JSON_VALUE)
	public void createReply(@RequestBody Comment comment) {
		//Need a comment DAO?
		//postDao.save(comment);
	}
	
}
