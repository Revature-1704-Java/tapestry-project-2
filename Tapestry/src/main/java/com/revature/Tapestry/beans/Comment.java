package com.revature.Tapestry.beans;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.ElementCollection;

@Entity
@Table(name = "COMMENT_TABLE")
public class Comment {
	protected Integer commentID;
	protected User user;
	protected String imagePath;
	protected String textContent;
	protected Date postTime;
	protected List<Comment> replies;
	
	public Comment() {}
	public Comment(User user, String imagePath, String textContent, Date postTime) {
		super();
		this.user = user;
		this.imagePath = imagePath;
		this.textContent = textContent;
		this.postTime = postTime;
		this.replies = new ArrayList<Comment>();
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
}
