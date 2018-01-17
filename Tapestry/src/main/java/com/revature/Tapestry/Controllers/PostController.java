package com.revature.Tapestry.Controllers;

import java.io.InputStream;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.amazonaws.auth.AWSCredentialsProvider;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.revature.Tapestry.DatabaseAccessors.BoardDAO;
import com.revature.Tapestry.DatabaseAccessors.PostDAO;
import com.revature.Tapestry.DatabaseAccessors.UserDAO;
import com.revature.Tapestry.beans.Post;

@RestController
public class PostController {

	private PostDAO postDao;
	private BoardDAO boardDao;
	private UserDAO userDao;
	
	public PostController(PostDAO postDao, BoardDAO boardDao, UserDAO userDao) {
		this.postDao = postDao;
		this.boardDao = boardDao;
		this.userDao = userDao;
	}
	
	//Get All Posts in DB, return as JSON
	@GetMapping(value="/getPosts", produces=MediaType.APPLICATION_JSON_VALUE)
	public List<Post> getPosts() {
		/*
		Date d = new Date();
		List<Post> myThreads = new ArrayList<Post>();
		List<Board> boards = new ArrayList<Board>();
		Board b = boardDao.findOne(11);
		User u1 = userDao.findOne(9);
		boards.add(b);
		Post p = new Post(u1,"user/foo.jpg", "test post", d, "title", boards);
		Post p1 = new Post(u1, "user/bar.jpg", "test post2", d, "title2", boards);
		myThreads.add(p);
		myThreads.add(p1);
		
		return myThreads;
		*/
		return postDao.findAll().stream().collect(Collectors.toList());
	}	
	
	@PostMapping(value="/createThread")
	public void submitPost()
	{
		AWSCredentialsProvider credentials = new AWSStaticCredentialsProvider 
				(new BasicAWSCredentials(System.getenv("ACCESSKEY"), System.getenv("SECRETKEY")));
		AmazonS3 s3Client = AmazonS3ClientBuilder.standard()
                .withCredentials(credentials)
                .build();
	}
	
	/*@PostMapping(value="/createThread", consumes=MediaType.APPLICATION_JSON_VALUE)
	public void createThread(@RequestBody Post post) {		
		postDao.save(post);
		//Now doesn't work. SQL error Integrity violated.
	}*/
	
	@PostMapping(value="createPost")
	public void submitComment()
	{
		//get s3client
		String bucketName = "bucketOfPhotos";
		AWSCredentialsProvider credentials = new AWSStaticCredentialsProvider 
				(new BasicAWSCredentials(System.getenv("ACCESSKEY"), System.getenv("SECRETKEY")));
		AmazonS3 s3Client = AmazonS3ClientBuilder.standard()
                .withCredentials(credentials)
                .build();
		
		//code to insert an image to s3
		InputStream image = null;
		String key = "";
		PutObjectRequest putObjectRequest = new PutObjectRequest(bucketName, key, image, new ObjectMetadata());
		s3Client.putObject(putObjectRequest);
	}
	/*@PostMapping(value="/createReply/{id}", consumes=MediaType.APPLICATION_JSON_VALUE)
	public void createReply(@RequestBody Comment comment, @PathVariable("id") int id) {
		Post p = postDao.findOne(id);
		List<Comment> replies = p.getReplies();
		replies.add(comment);
		p.setReplies(replies);
		postDao.save(p);
		//Getting an 500 internal server error "object references an unsaved transient instance"
	}*/
	
}
