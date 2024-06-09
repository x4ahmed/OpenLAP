package com.openlap.ISCCreator.dto;

import com.openlap.ISCCreator.model.IndicatorGoal;

public class IndicatorGoalDTO {
    private String id;
    private String noun;
    private String name;
    private boolean custom;
    private String description;

    // Getters and Setters

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNoun() {
        return noun;
    }

    public void setNoun(String noun) {
        this.noun = noun;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public boolean isCustom() {
        return custom;
    }

    public void setCustom(boolean custom) {
        this.custom = custom;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public IndicatorGoal toIndicatorGoal() {
        IndicatorGoal indicatorGoal = new IndicatorGoal();
        indicatorGoal.setId(this.id);
        indicatorGoal.setNoun(this.noun);
        indicatorGoal.setName(this.name);
        indicatorGoal.setCustom(this.custom);
        indicatorGoal.setDescription(this.description);
        return indicatorGoal;
    }
}
