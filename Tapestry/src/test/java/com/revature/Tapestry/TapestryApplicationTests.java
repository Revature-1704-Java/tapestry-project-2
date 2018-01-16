package com.revature.Tapestry;

import static org.junit.Assert.assertTrue;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.revature.Tapestry.DatabaseAccessors.BoardDAO;
import com.revature.Tapestry.beans.Board;
import com.revature.Tapestry.beans.Post;

@RunWith(SpringRunner.class)
@SpringBootTest
public class TapestryApplicationTests {
	
	@Autowired
    BoardDAO boardDAO;

	@Test
	public void basicDatabaseConnectivityExists() {
		int numBoardsBefore = boardDAO.findAll().size();
		List<Post> postList = new ArrayList<Post>();
		Board testBoard = new Board("testBoard", postList);
		ArrayList<Board> boards = new ArrayList<Board>();
		boards.add(testBoard);
		boardDAO.save(boards);
		List<Board> searchresults = boardDAO.findAll();
		assertTrue(searchresults.size() == numBoardsBefore + 1);
		//assertTrue(true);//temp to test something
	}

}
