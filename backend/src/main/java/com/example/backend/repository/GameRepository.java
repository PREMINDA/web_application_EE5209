package com.example.backend.repository;

import com.example.backend.domian.collection.Game;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GameRepository extends JpaRepository<Game,Long> {

}
