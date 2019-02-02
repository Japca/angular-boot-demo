package com.japca.angulardemo.controller;

import com.japca.angulardemo.Repository.ItemRepository;
import com.japca.angulardemo.entity.Item;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import javax.transaction.Transactional;

/**
 * Created by Jakub krhovják on 2/2/19.
 */
@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ItemController {

    private ItemRepository itemRepository;

    @Autowired
    public ItemController(ItemRepository itemRepository) {
        this.itemRepository = itemRepository;

    }

    @Transactional
    @GetMapping("/list")
    public List<Item> listItems() {
        return itemRepository.findAll();
    }

}
