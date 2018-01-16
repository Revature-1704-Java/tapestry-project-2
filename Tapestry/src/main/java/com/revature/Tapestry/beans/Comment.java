package com.revature.Tapestry.beans;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.ElementCollection;

@Entity
@Table(name = "COMMENT")
public class Comment {
	protected Integer commentID;
	protected Integer userID;
	protected String imagePath;
	protected String textContent;
	protected Date postTime;
	protected List<Comment> replies;
	
	public Comment() {}
	public Comment(Integer userID, String imagePath, String textContent, Date postTime,
			List<Comment> replies) {
		super();
		this.userID = userID;
		this.imagePath = imagePath;
		this.textContent = textContent;
		this.postTime = postTime;
		this.replies = replies;
	}
	@Id
	@GeneratedValue
	@Column
	public Integer getCommentID() {
		return commentID;
	}
	public void setCommentID(Integer commentID) {
		this.commentID = commentID;
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
	@ElementCollection
	public List<Comment> getReplies() {
		return replies;
	}
	public void setReplies(List<Comment> replies) {
		this.replies = replies;
	}
}
