package com.revature.Tapestry.Controllers;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.revature.Tapestry.DatabaseAccessors.PostDAO;
import com.revature.Tapestry.beans.Comment;
import com.revature.Tapestry.beans.Post;
import com.revature.Tapestry.beans.User;

@RestController
public class PostController {

	private PostDAO postDao;
	
	public PostController(PostDAO postDao) {
		this.postDao = postDao;
	}
	
	@GetMapping(value="/getposts", produces=MediaType.APPLICATION_JSON_VALUE)
	public List<Post> getPosts() {
		return postDao.findAll().stream().collect(Collectors.toList());
	}
	
	@PostMapping(value="/createThread", consumes=MediaType.APPLICATION_JSON_VALUE)
	public void createThread(@RequestBody Post post) {
		
	}
	
	@PostMapping(value="/createReply", consumes=MediaType.APPLICATION_JSON_VALUE)
	public void createReply(@RequestBody Comment comment) {
		
	}
	
}
