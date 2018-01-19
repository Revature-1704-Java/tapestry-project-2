package com.revature.Tapestry.Aspect;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;

import com.revature.Tapestry.beans.User;

@Aspect
@Component
public class UserControllerAspect {

	@Before("execution(* com.revature.Tapestry.Controllers.UserController.login(..))")
	public void loginStart() {
		System.out.println("Attempting Login...");
	}
	
	@AfterReturning(value="execution(* com.revature.Tapestry.Controllers.UserController.login(..))", returning="returnValue")
	public void loginEnd(JoinPoint joinPoint, Object returnValue) {
		if (returnValue != null) {
			System.out.println("User " +((User) returnValue).getUsername() + " logged in");
		}
		else {
			System.out.println("login failed");
		}
	}
	
	@Before("execution(* com.revature.Tapestry.Controllers.UserController.signUp(..))")
	public void signUpStart() {
		System.out.println("Attempting Sign up...");
	}
	
	@AfterReturning(value="execution(* com.revature.Tapestry.Controllers.UserController.signUp(..))", returning="returnValue")
	public void signUpEnd(JoinPoint joinPoint, Object returnValue) {
		if (returnValue != null) {
			System.out.println("User " +((User) returnValue).getUsername() + " signed up");
		}
		else {
			System.out.println("signup failed, user already exists");
		}
	}
	
	
}
