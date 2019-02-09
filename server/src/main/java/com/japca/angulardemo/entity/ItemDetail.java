package com.japca.angulardemo.entity;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ForeignKey;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;

import lombok.Data;
import lombok.ToString;

/**
 * Created by Jakub krhovják on 10/21/17.
 */

@Entity
@Data
@ToString(exclude = {"item"})
public class ItemDetail {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "pooled")
	@SequenceGenerator(allocationSize = 1, name = "item_detail_id_seq", sequenceName = "item_detail_id_seq")
	private Long itemDetailId;
	private String description;

	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "item_id", foreignKey = @ForeignKey(name = "item_id_fkey"))
	private Item item;

//	@Override
//	public String toString() {
//		return "ItemDetail{" +
//
//				'}';
//	}
}
