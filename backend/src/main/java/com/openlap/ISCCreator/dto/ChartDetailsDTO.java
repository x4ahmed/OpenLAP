package com.openlap.ISCCreator.dto;

import com.openlap.ISCCreator.model.ChartDetails;

public class ChartDetailsDTO {
    private String type;
    private String width;
    private String foreColor;

    // Getters and Setters

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getWidth() {
        return width;
    }

    public void setWidth(String width) {
        this.width = width;
    }

    public String getForeColor() {
        return foreColor;
    }

    public void setForeColor(String foreColor) {
        this.foreColor = foreColor;
    }

    public ChartDetails toChartDetails() {
        ChartDetails chartDetails = new ChartDetails();
        chartDetails.setType(this.type);
        chartDetails.setWidth(this.width);
        chartDetails.setForeColor(this.foreColor);
        return chartDetails;
    }
}
