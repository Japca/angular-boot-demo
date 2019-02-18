package com.japca.angulardemo.Repository;

import com.japca.angulardemo.entity.Item;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

/**
 * Created by Jakub krhovják on 2/2/19.
 */
@Repository
@Transactional
public interface ItemRepository extends JpaRepository<Item, Long> {

    @Query("Select i from  Item i")
    Page<Item> listPage(Pageable pageable);

}
