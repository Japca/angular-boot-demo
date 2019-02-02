package com.japca.angulardemo.Repository;

import com.japca.angulardemo.entity.Item;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by Jakub krhovják on 2/2/19.
 */
@Repository
public interface ItemRepository extends JpaRepository<Item, Long> {

}
