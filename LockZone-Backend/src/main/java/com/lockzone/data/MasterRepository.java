package com.lockzone.data;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.lockzone.beans.Master;

@Repository
public interface MasterRepository extends JpaRepository<Master,Integer>{
	//public List<Master> findAll();
	public List<Master> findByNameLike(String name);
	
	public Master save(Master master);
}
