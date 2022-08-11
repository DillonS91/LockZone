package com.lockzone.data;

import java.util.List;
import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.lockzone.beans.Master;
import com.lockzone.beans.User;

@Repository
public interface MasterRepository extends JpaRepository<Master,Integer>{
	//public List<Master> findAll();
	public List<Master> findByUsernameLike(String username);

	@Query("Select mast, u from Master mast, User u where u.username =?1 and u.master= mast")
	public Master findByUsername(String username);
	
	public Master save(Set<Master> set);
}
