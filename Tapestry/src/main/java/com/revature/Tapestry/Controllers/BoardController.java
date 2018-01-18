package com.revature.Tapestry.Controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.revature.Tapestry.DatabaseAccessors.BoardDAO;
import com.revature.Tapestry.DatabaseAccessors.PostDAO;
import com.revature.Tapestry.beans.Board;
import com.revature.Tapestry.beans.Post;
import com.revature.Tapestry.beans.User;

@RestController
public class BoardController {
	private BoardDAO boardDao;
	private PostDAO postDao;
	
	public BoardController(BoardDAO boardDao, PostDAO postDao) {
		this.boardDao = boardDao;
		this.postDao = postDao;
	}
	
	//Get a thread. Post and all replies
		@PostMapping(value="/createBoard")
		public ResponseEntity<?> getPosts(@RequestParam("postId") int boardId, @RequestParam("boardName") String boardName) {
			Board board = boardDao.findOne(boardId);
			if (board ==  null){
				board = new Board(boardName);
				boardDao.save(board);
				return new ResponseEntity<>(HttpStatus.CREATED);
			}
			
			return new ResponseEntity<>("Board Name: " + board.getBoardName() + " already exists", HttpStatus.IM_USED);
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
