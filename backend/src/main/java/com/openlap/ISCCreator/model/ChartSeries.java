package com.openlap.ISCCreator.model;

import java.util.ArrayList;
import java.util.List;

public class ChartSeries {
    private String name;
    private List<Integer> data = new ArrayList<>();
    private String field;

    public ChartSeries() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Integer> getData() {
        return data;
    }

    public void setData(List<Integer> data) {
        this.data = data;
    }

    public String getField() {
        return field;
    }

    public void setField(String field) {
        this.field = field;
    }
}
