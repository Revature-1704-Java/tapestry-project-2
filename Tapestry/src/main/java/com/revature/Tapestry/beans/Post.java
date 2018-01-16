package com.revature.Tapestry.beans;

import java.util.Date;
import java.util.List;
import javax.persistence.ElementCollection;
import javax.persistence.Column;
import javax.persistence.Entity;

@Entity
public class Post extends Comment {
	
	protected String title;
	List<Board> boardsPosted;
	
	
	public Post() {}
	public Post(Integer userID, String imagePath, String textContent, Date postTime,
			List<Comment> replies, String title, List<Board> boardsPosted) {
		super(userID, imagePath, textContent, postTime, replies);
		this.title = title;
		this.boardsPosted = boardsPosted;
	}
	@Column
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	@ElementCollection
	public List<Board> getBoardsPosted() {
		return boardsPosted;
	}
	public void setBoardsPosted(List<Board> boardsPosted) {
		this.boardsPosted = boardsPosted;
	}
}
