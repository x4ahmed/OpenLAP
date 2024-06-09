package com.openlap.ISCCreator.dto;

import com.openlap.ISCCreator.model.OnDatasetHover;

public class OnDatasetHoverDTO {
    private boolean highlightDataSeries;

    // Getters and Setters

    public boolean isHighlightDataSeries() {
        return highlightDataSeries;
    }

    public void setHighlightDataSeries(boolean highlightDataSeries) {
        this.highlightDataSeries = highlightDataSeries;
    }

    public OnDatasetHover toOnDatasetHover() {
        OnDatasetHover onDatasetHover = new OnDatasetHover();
        onDatasetHover.setHighlightDataSeries(this.highlightDataSeries);
        return onDatasetHover;
    }
}
