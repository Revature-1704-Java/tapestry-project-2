package com.revature.Tapestry.Controllers;

import org.springframework.web.bind.annotation.RestController;

import com.revature.Tapestry.DatabaseAccessors.UserDAO;

@RestController
public class LoginController {
	private UserDAO userDao;
	
	public LoginController(UserDAO userDao) {
		this.userDao = userDao;
	}
	
	
}
