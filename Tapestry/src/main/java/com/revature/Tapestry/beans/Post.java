package com.revature.Tapestry.beans;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import javax.persistence.ElementCollection;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "POST")
public class Post {
	
	protected Integer postID;
	protected User user;
	protected String imagePath;
	protected String textContent;
	protected Date postTime;
	protected List<Comment> replies;
	protected String title;
	List<Board> boardsPosted;
	
	
	public Post() {}
	
	public Post(User user, String imagePath, String textContent, Date postTime, String title,
			List<Board> boardsPosted) {
		super();
		this.user = user;
		this.imagePath = imagePath;
		this.textContent = textContent;
		this.postTime = postTime;
		this.title = title;
		this.boardsPosted = boardsPosted;
		this.replies = new ArrayList<Comment>();
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
	@ManyToOne
	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	@Column
	public String getImagePath() {
		return imagePath;
	}

	public void setImagePath(String imagePath) {
		this.imagePath = imagePath;
	}
	@Lob
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
	@ElementCollection
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
	@Column
	@ElementCollection
	public List<Board> getBoardsPosted() {
		return boardsPosted;
	}
	public void setBoardsPosted(List<Board> boardsPosted) {
		this.boardsPosted = boardsPosted;
	}
}
