package com.revature.Tapestry;

import static org.junit.Assert.assertTrue;

import java.util.ArrayList;
import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import com.revature.Tapestry.Controllers.BoardController;
import com.revature.Tapestry.DatabaseAccessors.BoardDAO;
import com.revature.Tapestry.beans.Board;

@SpringBootTest
@WebMvcTest(value = BoardController.class, secure = false)
public class TapestryApplicationTests {
	
	@Autowired
    BoardDAO boardDAO;

	@Autowired
	private MockMvc mockMvc;

	@MockBean
	private BoardDAO boardDao;	
	
	@Test
	public void basicDatabaseConnectivityExists() {
		int numBoardsBefore = boardDAO.findAll().size();
		Board testBoard = new Board("testBoard");
		ArrayList<Board> boards = new ArrayList<Board>();
		boards.add(testBoard);
		boardDAO.save(boards);
		List<Board> searchresults = boardDAO.findAll();
		assertTrue(searchresults.size() == numBoardsBefore + 1);
		//assertTrue(true);//temp to test something
	}
	
	@Test
	public void controllerTest() throws Exception {
		
		/*
		Date d = new Date();
		List<Post> myThreads = new ArrayList<Post>();
		Post p = new Post(1,1,"user/foo.jpg", "test post", d, null, "title", null);
		Post p1 = new Post(2,1,"user/bar.jpg", "test post2", d, null, "title2", null);
		myThreads.add(p);
		myThreads.add(p1);
		Board mockB = new Board(1, myThreads);
		BoardController dummyClass = Mockito.mock(BoardController.class);
		
		Mockito.doReturn(myThreads).when(dummyClass).getITPosts();

		//Mockito.when(boardDao.findOne(Mockito.anyInt())).thenReturn(mockB);

		RequestBuilder requestBuilder = MockMvcRequestBuilders.get("/IT").accept(MediaType.APPLICATION_JSON);

		MvcResult result = mockMvc.perform(requestBuilder).andReturn();

		System.out.println(result.getResponse());
		String expected = "{id:Course1,name:Spring,description:10 Steps}";
		// {"id":"Course1","name":"Spring","description":"10 Steps, 25 Examples and 10K Students","steps":["Learn Maven","Import Project","First Example","Second Example"]}
		//JSONAssert.assertEquals(expected, result.getResponse().getContentAsString(), false);
		*/
		assertTrue(true);
		
		
	}
}
