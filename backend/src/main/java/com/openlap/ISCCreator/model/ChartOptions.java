package com.openlap.ISCCreator.model;

import java.util.List;

public class ChartOptions {
    private ChartDetails chart;
    private XAxis xaxis;
    private String headerNameOptions;
    private String headerNameSeries;
    private List<String> labels;
    private boolean defaultOption;
    private Legend legend;
    private String name;
    private PlotOptions plotOptions;
    private Tooltip tooltip;
    private Stroke stroke;

    // Getters and Setters

    public ChartDetails getChart() {
        return chart;
    }

    public void setChart(ChartDetails chart) {
        this.chart = chart;
    }

    public XAxis getXaxis() {
        return xaxis;
    }

    public void setXaxis(XAxis xaxis) {
        this.xaxis = xaxis;
    }

    public String getHeaderNameOptions() {
        return headerNameOptions;
    }

    public void setHeaderNameOptions(String headerNameOptions) {
        this.headerNameOptions = headerNameOptions;
    }

    public String getHeaderNameSeries() {
        return headerNameSeries;
    }

    public void setHeaderNameSeries(String headerNameSeries) {
        this.headerNameSeries = headerNameSeries;
    }

    public List<String> getLabels() {
        return labels;
    }

    public void setLabels(List<String> labels) {
        this.labels = labels;
    }

    public boolean isDefaultOption() {
        return defaultOption;
    }

    public void setDefaultOption(boolean defaultOption) {
        this.defaultOption = defaultOption;
    }

    public Legend getLegend() {
        return legend;
    }

    public void setLegend(Legend legend) {
        this.legend = legend;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public PlotOptions getPlotOptions() {
        return plotOptions;
    }

    public void setPlotOptions(PlotOptions plotOptions) {
        this.plotOptions = plotOptions;
    }

    public Tooltip getTooltip() {
        return tooltip;
    }

    public void setTooltip(Tooltip tooltip) {
        this.tooltip = tooltip;
    }

    public Stroke getStroke() {
        return stroke;
    }

    public void setStroke(Stroke stroke) {
        this.stroke = stroke;
    }
}
