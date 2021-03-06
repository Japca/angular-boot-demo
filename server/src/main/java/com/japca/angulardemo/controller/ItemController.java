package com.japca.angulardemo.controller;

import static java.util.stream.Collectors.toList;

import com.japca.angulardemo.Repository.ItemRepository;
import com.japca.angulardemo.dto.ItemDto;
import com.japca.angulardemo.entity.Item;

import org.dozer.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by Jakub krhovják on 2/2/19.
 */
@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ItemController {

    private ItemRepository itemRepository;
    private Mapper mapper;

    @Autowired
    public ItemController(ItemRepository itemRepository, Mapper mapper) {
        this.itemRepository = itemRepository;
        this.mapper = mapper;
    }

//    @Transactional
//    @GetMapping("/list")
//    public List<ItemDto> listItems() {
//      itemRepository.findAll();
//        ItemDto map = mapper.map(item1, ItemDto.class);
//        return null;
//        item1
//        return itemRepository.findAll().stream()
//                .map(item -> mapper.map(item, ItemDto.class))
//                .collect(toList());
//}

    //    @Transactional
    @GetMapping("/list")
    public List<ItemDto> listItems() {
        List<ItemDto> collect = itemRepository.findAll().stream()
                .map(item -> mapper.map(item, ItemDto.class))
                .collect(toList());
        return collect;

    }

    @GetMapping("/list/page")
    public Page<Item> listResult(Pageable pageable) {
        Page<Item> page = itemRepository.listPage(pageable);
        return page;
    }

    @GetMapping("/list/{id}")
    @Transactional
    public ItemDto getItem(@PathVariable long id) {
        Item one = itemRepository.getOne(id);
        return mapper.map(one, ItemDto.class);
    }

    @PatchMapping
    public ItemDto updateItem(@RequestBody ItemDto item) {
        Item map = mapper.map(item, Item.class);
        map.getItemDetail().setItem(map);
        return mapper.map(itemRepository.save(map), ItemDto.class);
    }

}
