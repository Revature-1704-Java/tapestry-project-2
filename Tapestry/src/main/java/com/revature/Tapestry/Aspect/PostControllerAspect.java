package com.revature.Tapestry.Aspect;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;

import com.revature.Tapestry.beans.Post;
import com.revature.Tapestry.beans.User;

@Aspect
@Component
public class PostControllerAspect {

	@Before("execution(* com.revature.Tapestry.Controllers.PostController.getPosts(..))")
	public void getPostStart() {
		System.out.println("Getting Post...");
	}
	
	@AfterReturning(value="execution(* com.revature.Tapestry.Controllers.PostController.getPosts(..))", returning="returnValue")
	public void getPostEnd(JoinPoint joinPoint, Object returnValue) {
		if (returnValue != null) {
			System.out.println("Got Post, ID: " +((Post) returnValue).getPostID());
		}
		else {
			System.out.println("Failed to get Post");
		}
	}
	
	@Before("execution(* com.revature.Tapestry.Controllers.PostController.signUp(..))")
	public void getBoardPostsStart() {
		System.out.println("Getting Board Posts...");
	}
	
	@AfterReturning(value="execution(* com.revature.Tapestry.Controllers.PostController.signUp(..))", returning="returnValue")
	public void getBoardPostsEnd(JoinPoint joinPoint, Object returnValue) {
		if (returnValue != null) {
			System.out.println("Got Posts for Board");
		}
		else {
			System.out.println("Failed to get Posts");
		}
	}
}
