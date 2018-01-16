package com.revature.Tapestry.Controllers;

import java.util.Collection;
import java.util.stream.Collectors;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.revature.Tapestry.DatabaseAccessors.BoardDAO;
import com.revature.Tapestry.DatabaseAccessors.PostDAO;
import com.revature.Tapestry.beans.Board;
import com.revature.Tapestry.beans.Comment;
import com.revature.Tapestry.beans.Post;

@RestController
public class BoardController {
	private BoardDAO boardDao;
	private PostDAO postDao;
	
	public BoardController(BoardDAO boardDao, PostDAO postDao) {
		this.boardDao = boardDao;
		this.postDao = postDao;
	}
	
	/*
	 * Collection<Post> threads = postDao.findAll().stream().collect(Collectors.toList());
	 */
	
	
	@GetMapping(value="/IT", produces=MediaType.APPLICATION_JSON_VALUE)
	//@CrossOrigin(origins = "http://localhost:4200")
	public Collection<Post> getITPosts() {
		Board board = boardDao.findOne(1);
		Collection<Post> threads = board.getThreads();
		//Not sure what this will give... thinking it is not enough to populate board
		return threads;
	}
	
	@GetMapping(value="/Sales", produces=MediaType.APPLICATION_JSON_VALUE)
	public Collection<Post> getSalesPosts() {
		Board board = boardDao.getOne(2);
		Collection<Post> threads = board.getThreads();
		return threads;
	}
}
