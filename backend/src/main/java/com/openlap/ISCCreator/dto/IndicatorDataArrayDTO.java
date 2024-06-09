package com.openlap.ISCCreator.dto;

import com.openlap.ISCCreator.model.IndicatorDataArray;

public class IndicatorDataArrayDTO {
    private String value;
    private String placeholder;

    // Getters and Setters
    public String getValue() {
        return value;
    }
    public void setValue(String value) {
        this.value = value;
    }
    public String getPlaceholder() {
        return placeholder;
    }
    public void setPlaceholder(String placeholder) {
        this.placeholder = placeholder;
    }

    public IndicatorDataArray toIndicatorDataArray() {
        IndicatorDataArray indicatorDataArray = new IndicatorDataArray();
        indicatorDataArray.setValue(this.value);
        indicatorDataArray.setPlaceholder(this.placeholder);
        return indicatorDataArray;
    }
}
