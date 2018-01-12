package com.revature.Tapestry.beans;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Board {
	private int BoardID;
	private List<Post> threads;
	
	@Id
	@Column(nullable=false)
	public int getBoardID() {
		return BoardID;
	}
	public void setBoardID(int boardID) {
		BoardID = boardID;
	}
	@Column(nullable=false)
	public List<Post> getThreads() {
		return threads;
	}
	public void setThreads(List<Post> threads) {
		this.threads = threads;
	} 
	
	
}
