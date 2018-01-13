package com.revature.Tapestry.beans;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Board {
	private Integer BoardID;
	private List<Post> threads;
	
	
	public Board() {}
	public Board(Integer boardID, List<Post> threads) {
		super();
		BoardID = boardID;
		this.threads = threads;
	}
	@Id
	@GeneratedValue
	@Column
	public Integer getBoardID() {
		return BoardID;
	}
	public void setBoardID(Integer boardID) {
		BoardID = boardID;
	}
	@ElementCollection
	public List<Post> getThreads() {
		return threads;
	}
	public void setThreads(List<Post> threads) {
		this.threads = threads;
	}
	
	
}
