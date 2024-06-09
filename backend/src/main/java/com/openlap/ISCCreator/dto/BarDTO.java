package com.openlap.ISCCreator.dto;

import com.openlap.ISCCreator.model.Bar;

public class BarDTO {
    private int borderRadius;
    private boolean horizontal;

    // Getters and Setters

    public int getBorderRadius() {
        return borderRadius;
    }

    public void setBorderRadius(int borderRadius) {
        this.borderRadius = borderRadius;
    }

    public boolean isHorizontal() {
        return horizontal;
    }

    public void setHorizontal(boolean horizontal) {
        this.horizontal = horizontal;
    }

    public Bar toBar() {
        Bar bar = new Bar();
        bar.setBorderRadius(this.borderRadius);
        bar.setHorizontal(this.horizontal);
        return bar;
    }
}
