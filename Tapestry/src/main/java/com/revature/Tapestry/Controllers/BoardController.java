package com.revature.Tapestry.Controllers;

import org.springframework.web.bind.annotation.RestController;

import com.revature.Tapestry.DatabaseAccessors.BoardDAO;
import com.revature.Tapestry.DatabaseAccessors.PostDAO;

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
	
	/*
	@GetMapping(value="/IT", produces=MediaType.APPLICATION_JSON_VALUE)
	//@CrossOrigin(origins = "http://localhost:4200")
	public List<Post> getITPosts() {
		List<Post> threads = boardDao.findOne(1).getThreads();
		//Infinite loop b/c board refers to post & post refers to board...
		//Adding @JsonIgnore to getThreads in board works but not sure if we want that...
		return threads;
	}
	*/
}
