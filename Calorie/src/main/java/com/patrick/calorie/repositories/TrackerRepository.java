package com.patrick.calorie.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.patrick.calorie.models.Tracker;

public interface TrackerRepository extends CrudRepository<Tracker,Long> {
	List<Tracker>findAll();
	Optional<Tracker>findByName(String name);
}
