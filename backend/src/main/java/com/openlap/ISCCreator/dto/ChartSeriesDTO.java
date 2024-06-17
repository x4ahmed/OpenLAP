package com.openlap.ISCCreator.dto;

import com.openlap.ISCCreator.model.ChartSeries;

import java.util.ArrayList;
import java.util.List;

public class ChartSeriesDTO {
    private String name;
    private List<Integer> data = new ArrayList<>();
    private String field;

    public ChartSeriesDTO() {
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

    public ChartSeries toChartSeries() {
        ChartSeries chartSeries = new ChartSeries();
        chartSeries.setName(this.name);
        chartSeries.setData(this.data);
        chartSeries.setField(this.field);
        return chartSeries;
    }
}
