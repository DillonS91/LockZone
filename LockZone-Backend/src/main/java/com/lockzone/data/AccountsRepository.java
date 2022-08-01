package com.lockzone.data;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.lockzone.beans.Accounts;

@Repository
public interface AccountsRepository extends PagingAndSortingRepository<Accounts, Integer> {
	
	public Page<Accounts> findByWebsiteMasterMasterId(int masterId, Pageable request);
	
	@Transactional(propagation = Propagation.NEVER)
	@Query("from Accounts acc inner join acc.website web inner join web.master mas")
	public Page<Accounts> findAllAccountsPaged(Pageable request);
}
