package com.patrick.calorie.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.patrick.calorie.models.Tracker;
import com.patrick.calorie.services.TrackerService;

@CrossOrigin
@Controller
public class TrackerController {

    @Autowired
    private TrackerService trackerServ;

    @GetMapping("/calorie")
    public List<Tracker> getAllFoodItems() {
        return trackerServ.allTracker();
    }

    @PostMapping("/calorie")
    public Tracker inputCal(@RequestBody Tracker tracker) {
        return trackerServ.save(tracker);
    }
}
