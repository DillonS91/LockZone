package com.lockzone.data;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.lockzone.beans.Website;

@Repository
public interface WebsiteRepository extends JpaRepository<Website, Integer>{
	
	@Query("from Website web inner join web.master mas where mas.username = ?1")
	public List<Website> findByMasterUsername(String username);
	
	@Query("from Website web inner join web.master mas where mas.id=?1")
	public List<Website> findByMasterId(int id);
	//@Transactional(propagation = Propagation.SUPPORTS)
	//public Website save(Website website);
	
	public List<Website> findByurlNameLike(String string);
}
