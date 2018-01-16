package com.revature.Tapestry.Controllers;

import java.util.Collection;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.revature.Tapestry.DatabaseAccessors.UserDAO;
import com.revature.Tapestry.beans.Post;
import com.revature.Tapestry.beans.User;

@RestController
//@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
	private UserDAO userDao;
	
	public UserController(UserDAO userDao) {
		this.userDao = userDao;
	}
	
	@PostMapping(value="/login")
	public void login() {
		//Login a user
	}
	
	@PostMapping(value="/signup")
	public ResponseEntity signUp(@RequestBody User user) {
		userDao.save(user);
		return new ResponseEntity(user, HttpStatus.OK);
	}
	
	@GetMapping("/user/{id}")
	public ResponseEntity getCustomer(@PathVariable("id") int id) {

		User user = userDao.getOne(id);
		if (user == null) {
			return new ResponseEntity("No user found for ID " + id, HttpStatus.NOT_FOUND);
		}

		return new ResponseEntity(user, HttpStatus.OK);
	}
}
