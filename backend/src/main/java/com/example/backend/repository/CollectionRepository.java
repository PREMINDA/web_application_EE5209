package com.example.backend.repository;

import com.example.backend.domian.collection.Collection;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CollectionRepository extends JpaRepository<Collection,Long> {

}
