package com.lockzone.data;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lockzone.beans.Master;

public interface MasterRepository extends JpaRepository<Master,Integer>{
	public List<Master> findAll();
	public List<Master> findByNameLike(String name);
}
