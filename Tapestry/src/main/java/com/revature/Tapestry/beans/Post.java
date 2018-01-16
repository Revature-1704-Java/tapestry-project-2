package com.revature.Tapestry.beans;

import java.util.Date;
import java.util.List;
import javax.persistence.ElementCollection;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "POST")
public class Post {
	
	protected Integer postID;
	protected Integer userID;
	protected String imagePath;
	protected String textContent;
	protected Date postTime;
	protected List<Comment> replies;
	protected String title;
	List<Board> boardsPosted;
	
	
	public Post() {}
	
	public Post(Integer userID, String imagePath, String textContent, Date postTime, String title,
			List<Board> boardsPosted) {
		super();
		this.userID = userID;
		this.imagePath = imagePath;
		this.textContent = textContent;
		this.postTime = postTime;
		this.title = title;
		this.boardsPosted = boardsPosted;
	}

	@Id
	@GeneratedValue
	@Column
	public Integer getPostID() {
		return postID;
	}

	public void setPostID(Integer postID) {
		this.postID = postID;
	}
	@Column
	public Integer getUserID() {
		return userID;
	}

	public void setUserID(Integer userID) {
		this.userID = userID;
	}
	@Column
	public String getImagePath() {
		return imagePath;
	}

	public void setImagePath(String imagePath) {
		this.imagePath = imagePath;
	}
	@Column
	public String getTextContent() {
		return textContent;
	}

	public void setTextContent(String textContent) {
		this.textContent = textContent;
	}
	@Column
	public Date getPostTime() {
		return postTime;
	}

	public void setPostTime(Date postTime) {
		this.postTime = postTime;
	}
	@Column
	public List<Comment> getReplies() {
		return replies;
	}

	public void setReplies(List<Comment> replies) {
		this.replies = replies;
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
