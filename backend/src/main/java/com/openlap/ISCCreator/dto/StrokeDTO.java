package com.openlap.ISCCreator.dto;

import com.openlap.ISCCreator.model.Stroke;

public class StrokeDTO {
    private int width;
    private String curve;

    // Getters and Setters

    public int getWidth() {
        return width;
    }

    public void setWidth(int width) {
        this.width = width;
    }

    public String getCurve() {
        return curve;
    }

    public void setCurve(String curve) {
        this.curve = curve;
    }

    public Stroke toStroke() {
        Stroke stroke = new Stroke();
        stroke.setWidth(this.width);
        stroke.setCurve(this.curve);
        return stroke;
    }
}
