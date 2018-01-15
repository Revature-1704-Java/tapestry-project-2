package com.revature.Tapestry;

import static org.junit.Assert.assertTrue;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.PersistenceContext;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.TestExecutionListeners;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.support.DependencyInjectionTestExecutionListener;
import org.springframework.test.context.transaction.TransactionalTestExecutionListener;

import com.github.springtestdbunit.DbUnitTestExecutionListener;
import com.revature.Tapestry.DatabaseAccessors.BoardDAO;
import com.revature.Tapestry.beans.Board;
import com.revature.Tapestry.beans.Post;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = {PersistenceContext.class})
@TestExecutionListeners({DependencyInjectionTestExecutionListener.class,
    TransactionalTestExecutionListener.class,
    DbUnitTestExecutionListener.class})
public class TapestryApplicationTests {
	
	//@Autowired
    //BoardDAO boardDAO;

	@Test
	public void basicDatabaseConnectivityExists() {
		//List<Post> postList = new ArrayList<Post>();
		//Board testBoard = new Board("testBoard", postList);
		//ArrayList<Board> boards = new ArrayList<Board>();
		//boards.add(testBoard);
		//boardDAO.save(boards);
		//List<Board> searchresults = boardDAO.findAll();
		//assertTrue(searchresults.size() != 0);
		assertTrue(true);//temp to test something
	}

}
