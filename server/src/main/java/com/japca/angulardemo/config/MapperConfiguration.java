package com.japca.angulardemo.config;

import com.japca.angulardemo.dto.ItemDto;
import com.japca.angulardemo.entity.Item;

import org.dozer.DozerBeanMapper;
import org.dozer.Mapper;
import org.dozer.loader.api.BeanMappingBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * Created by Jakub krhovják on 2/3/19.
 */
@Configuration
public class MapperConfiguration {
//Collections.singletonList("dozerJdk8Converters.xml"))
    @Bean
    public Mapper mapper() {
        DozerBeanMapper dozerBeanMapper = new DozerBeanMapper();
        dozerBeanMapper.addMapping(cardDtoMapping());
        return dozerBeanMapper;
    }

    private BeanMappingBuilder cardDtoMapping() {
        return new BeanMappingBuilder() {
            protected void configure() {
                mapping(ItemDto.class, Item.class)
                        .fields("description", "itemDetail.description")
                        .fields("id", "itemDetail.itemDetailId")
                        .fields("id", "id");

            }
        };
    }
}
