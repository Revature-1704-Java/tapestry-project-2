package com.revature.Tapestry.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "BOARD")
public class Board {
	protected Integer boardID;
	protected String boardName;
	
	
	public Board() {}
	public Board(String boardName) {
		super();
		this.boardName = boardName;
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
}
