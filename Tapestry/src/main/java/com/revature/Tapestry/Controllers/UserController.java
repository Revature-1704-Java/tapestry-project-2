package com.revature.Tapestry.Controllers;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.revature.Tapestry.DatabaseAccessors.UserDAO;
import com.revature.Tapestry.beans.User;

@RestController
//@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
	private UserDAO userDao;
	
	public UserController(UserDAO userDao) {
		this.userDao = userDao;
	}
	
	@PostMapping(value="/login")
	public ResponseEntity<?> login(@RequestParam("username") String username,@RequestParam("password") String password) {
		//Login a user
		
		List<User> users = userDao.findByUsername(username);
		System.out.println(username);
		
		for (User u : users) {
			if(u.isCorrectPassword(password)) {
				u.nullPassword();
				return new ResponseEntity<>(u, HttpStatus.OK);
			}
		}
		
		User user = userDao.findByEmail(username);
		if(user!=null) user.toString();
		System.out.println(username);
		if(user!=null) {
			user.nullPassword();
			return new ResponseEntity<>(user, HttpStatus.OK);
		}
			
		
		return new ResponseEntity<>("Username/Email " + username + " does not exist.", HttpStatus.NOT_FOUND);
	}
	
	@PostMapping(value="/signup")
	public ResponseEntity<?> signUp(@RequestParam("username") String username,@RequestParam("password") String password, @RequestParam("email") String email) {
		User existingUser = userDao.findByEmail(email);
		if (existingUser ==  null){
			User user = new User(username, password, email);
			userDao.save(user);
			return new ResponseEntity<>(HttpStatus.CREATED);
		}
		
		return new ResponseEntity<>("Email " + existingUser.getEmail() + " already exists", HttpStatus.IM_USED);
	}
	
	@GetMapping("/user/{id}")
	public ResponseEntity<?> getUser(@PathVariable("id") int id) {

		User user = userDao.findOne(id);
		if (user == null) {
			return new ResponseEntity<>("No user found for ID " + id, HttpStatus.NOT_FOUND);
		}

		return new ResponseEntity<>(user, HttpStatus.OK);
	}
}
