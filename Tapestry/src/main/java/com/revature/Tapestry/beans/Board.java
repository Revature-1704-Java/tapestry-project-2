package com.revature.Tapestry.beans;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Board {
	protected Integer boardID;
	protected String boardName;
	protected List<Post> threads;
	
	
	public Board() {}
	public Board(String boardName, List<Post> threads) {
		super();
		this.boardName = boardName;
		this.threads = threads;
	}
	public String getBoardName() {
		return boardName;
	}
	public void setBoardName(String boardName) {
		this.boardName = boardName;
	}
	@Id
	@GeneratedValue
	@Column
	public Integer getBoardID() {
		return boardID;
	}
	public void setBoardID(Integer boardID) {
		this.boardID = boardID;
	}
	@ElementCollection
	public List<Post> getThreads() {
		return threads;
	}
	public void setThreads(List<Post> threads) {
		this.threads = threads;
	}
	
	
}
