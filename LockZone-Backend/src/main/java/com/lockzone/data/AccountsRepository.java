package com.lockzone.data;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.lockzone.beans.Accounts;
import com.lockzone.beans.Website;

@Repository
public interface AccountsRepository extends PagingAndSortingRepository<Accounts, Integer> {
	
	public Page<Accounts> findByWebsiteMasterMasterId(int masterId, Pageable request);
	
	@Transactional(propagation = Propagation.NEVER)
	@Query("from Accounts acc inner join acc.website web inner join web.master mas")
	public Page<Accounts> findAllAccountsPaged(Pageable request);
	
	
	@Query("from Accounts acc inner join acc.website web where web.id=?1")
	public List<Accounts> findByWebsiteId(int id);
	
}
