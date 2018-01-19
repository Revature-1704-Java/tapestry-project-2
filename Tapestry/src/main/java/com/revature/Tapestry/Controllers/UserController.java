package com.revature.Tapestry.Controllers;

import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.revature.Tapestry.DatabaseAccessors.UserDAO;
import com.revature.Tapestry.beans.User;

@RestController
@CrossOrigin
public class UserController {
	private UserDAO userDao;
	
	public UserController(UserDAO userDao) {
		this.userDao = userDao;
	}
	
	
	@PostMapping(value="/login", produces=MediaType.APPLICATION_JSON_VALUE)
	public User login(@RequestParam("username") String username,@RequestParam("password") String password) {
		//Login a user
		
		List<User> users = userDao.findByUsername(username);
		
		for (User u : users) {
			if(u.isCorrectPassword(password)) {
				u.nullPassword();
				return u;
			}
		}
		
		User user = userDao.findByEmail(username);
		if(user!=null) user.toString();
		if(user!=null) {
			user.nullPassword();
			return user;
		}
			
		
		return null;
	}
	
	@PostMapping(value="/signup", produces=MediaType.APPLICATION_JSON_VALUE)
	public User signUp(@RequestParam("username") String username, @RequestParam("email") String email, @RequestParam("password") String password) {
		User existingUser = userDao.findByEmail(email);
		User user = new User(username, email, password);
		if (existingUser ==  null){
			userDao.save(user);
			return userDao.findByEmail(email);
		}
		
		return null;
	}
	
	@GetMapping(value="/user/{id}", produces=MediaType.APPLICATION_JSON_VALUE)
	public User getUser(@PathVariable("id") int id) {

		User user = userDao.findOne(id);
		if (user == null) {
			return null;
		}

		return user;
	}
}
