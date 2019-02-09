package com.japca.angulardemo.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;

import lombok.Data;
import lombok.ToString;

/**
 * Created by Jakub krhovják on 10/21/17.
 */

@Entity
@Data
@ToString(exclude = {"itemDetail"})
public class Item {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "pooled")
	@SequenceGenerator(allocationSize = 1, name = "item_id_seq", sequenceName = "item_id_seq")
	private Long itemId;
	private String name;

	@JsonIgnoreProperties("item")
	@OneToOne(fetch = FetchType.LAZY, mappedBy = "item", cascade = CascadeType.ALL, optional = false)
	private ItemDetail itemDetail;

//	@Override
//	public String toString() {
//		return "Item{" +
//
//				'}';
//	}
}
