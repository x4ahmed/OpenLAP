package com.openlap.ISCCreator.dto;

import com.openlap.ISCCreator.model.XAxis;

import java.util.List;
import java.util.Map;

public class XAxisDTO {
    private String name;
    private String seriesName;
    private boolean unique;
    private boolean convertedCatToNumeric;
    private List<String> categories;
    private String field;
    private String type;
    private Map<String, Object> labels;
    private String tickAmount;

    // Getters and Setters


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSeriesName() {
        return seriesName;
    }

    public void setSeriesName(String seriesName) {
        this.seriesName = seriesName;
    }

    public boolean isUnique() {
        return unique;
    }

    public void setUnique(boolean unique) {
        this.unique = unique;
    }

    public boolean isConvertedCatToNumeric() {
        return convertedCatToNumeric;
    }

    public void setConvertedCatToNumeric(boolean convertedCatToNumeric) {
        this.convertedCatToNumeric = convertedCatToNumeric;
    }

    public List<String> getCategories() {
        return categories;
    }

    public void setCategories(List<String> categories) {
        this.categories = categories;
    }

    public String getField() {
        return field;
    }

    public void setField(String field) {
        this.field = field;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Map<String, Object> getLabels() {
        return labels;
    }

    public void setLabels(Map<String, Object> labels) {
        this.labels = labels;
    }

    public String getTickAmount() {
        return tickAmount;
    }

    public void setTickAmount(String tickAmount) {
        this.tickAmount = tickAmount;
    }

    public XAxis toXAxis() {
        XAxis xAxis = new XAxis();
        xAxis.setName(this.name);
        xAxis.setSeriesName(this.seriesName);
        xAxis.setUnique(this.unique);
        xAxis.setConvertedCatToNumeric(this.convertedCatToNumeric);
        xAxis.setCategories(this.categories);
        xAxis.setField(this.field);
        xAxis.setType(this.type);
        xAxis.setLabels(this.labels);
        xAxis.setTickAmount(this.tickAmount);
        return xAxis;
    }

}
