package com.revature.Tapestry.DatabaseAccessors;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.Tapestry.beans.Board;

@Repository
public interface BoardDAO extends JpaRepository<Board,Integer>{
	Board findByBoardName(String boardName);
}
