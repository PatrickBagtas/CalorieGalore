package com.patrick.calorie.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.patrick.calorie.models.Tracker;
import com.patrick.calorie.repositories.TrackerRepository;

@Service
public class TrackerService {

	@Autowired
	private TrackerRepository trackerRepository;
	public TrackerService() {}
	
	public List<Tracker> allTracker(){
		return trackerRepository.findAll();
	}
	
	public Tracker getTracker(String Name) {
		Optional<Tracker>potentialTracker = trackerRepository.findByName(Name);
		return potentialTracker.isPresent()?potentialTracker.get():null;
	}
	
	public Tracker findTracker(Long id) {
		Optional<Tracker> optionalTracker = trackerRepository.findById(id);
		return optionalTracker.isPresent()?optionalTracker.get():null;
	}
	public Tracker updateTracker(Tracker tracker) {
		Optional<Tracker>optionalTracker = trackerRepository.findById(tracker.getId());
		return optionalTracker.isPresent()?trackerRepository.save(tracker):null;
	}
	
	public Tracker save(Tracker tracker) {
		return trackerRepository.save(tracker);
	}
	public void deleteTracker(Long id) {
		trackerRepository.deleteById(id);
	}
}
