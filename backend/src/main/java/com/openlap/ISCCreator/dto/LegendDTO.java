package com.openlap.ISCCreator.dto;

import com.openlap.ISCCreator.model.Legend;

public class LegendDTO {
    private String position;
    private String horizontalAlign;

    // Getters and Setters


    public String getHorizontalAlign() {
        return horizontalAlign;
    }

    public void setHorizontalAlign(String horizontalAlign) {
        this.horizontalAlign = horizontalAlign;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public Legend toLegend() {
        Legend legend = new Legend();
        legend.setPosition(this.position);
        legend.setHorizontalAlign(this.horizontalAlign);
        return legend;
    }
}
