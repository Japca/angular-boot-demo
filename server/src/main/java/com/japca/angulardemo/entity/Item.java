package com.japca.angulardemo.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;

import lombok.Data;

/**
 * Created by Jakub krhovják on 10/21/17.
 */

@Entity
@Data
public class Item {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "pooled")
	@SequenceGenerator(allocationSize = 1, name = "item_id_seq", sequenceName = "item_id_seq")
	private Long itemId;
	private String name;

	@JsonIgnoreProperties("item")
	@OneToMany(fetch = FetchType.EAGER, mappedBy = "item", cascade = { CascadeType.PERSIST, CascadeType.MERGE })
	private List<ItemDetail> itemDetails = new ArrayList<>();

}
