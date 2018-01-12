package com.revature.Tapestry.beans;

import java.util.List;
import javax.persistence.ElementCollection;
import javax.persistence.Column;
import javax.persistence.Entity;

@Entity
public class Post extends Comment {
	
	private String title;
	//List<Board> boardsPosted;
	
	@Column
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	/*@ElementCollection
	public List<Board> getBoardsPosted() {
		return boardsPosted;
	}
	public void setBoardsPosted(List<Board> boardsPosted) {
		this.boardsPosted = boardsPosted;
	}*/
}
