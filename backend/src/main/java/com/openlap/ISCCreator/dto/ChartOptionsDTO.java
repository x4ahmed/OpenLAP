package com.openlap.ISCCreator.dto;

import com.openlap.ISCCreator.model.ChartOptions;

import java.util.List;

public class ChartOptionsDTO {
    private ChartDetailsDTO chart;
    private XAxisDTO xaxis;
    private String headerNameOptions;
    private String headerNameSeries;
    private List<String> labels;
    private boolean defaultOption;
    private LegendDTO legendDTO;
    private String name;
    private PlotOptionsDTO plotOptions;
    private TooltipDTO tooltip;
    private StrokeDTO stroke;

    // Getters and Setters

    public ChartDetailsDTO getChart() {
        return chart;
    }

    public void setChart(ChartDetailsDTO chart) {
        this.chart = chart;
    }

    public XAxisDTO getXaxis() {
        return xaxis;
    }

    public void setXaxis(XAxisDTO xaxis) {
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

    public LegendDTO getLegend() {
        return legendDTO;
    }

    public void setLegend(LegendDTO legendDTO) {
        this.legendDTO = legendDTO;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public PlotOptionsDTO getPlotOptions() {
        return plotOptions;
    }

    public void setPlotOptions(PlotOptionsDTO plotOptionsDTO) {
        this.plotOptions = plotOptionsDTO;
    }

    public TooltipDTO getTooltip() {
        return tooltip;
    }

    public void setTooltip(TooltipDTO tooltipDTO) {
        this.tooltip = tooltipDTO;
    }

    public StrokeDTO getStroke() {
        return stroke;
    }

    public void setStroke(StrokeDTO strokeDTO) {
        this.stroke = strokeDTO;
    }

    public ChartOptions toChartOptions() {
        ChartOptions chartOptions = new ChartOptions();
        chartOptions.setChart(this.chart.toChartDetails());
        chartOptions.setXaxis(this.xaxis.toXAxis());
        chartOptions.setHeaderNameOptions(this.headerNameOptions);
        chartOptions.setHeaderNameSeries(this.headerNameSeries);
        chartOptions.setLabels(this.labels);
        chartOptions.setDefaultOption(this.defaultOption);
        chartOptions.setLegend(this.legendDTO.toLegend());
        chartOptions.setName(this.name);
        chartOptions.setPlotOptions(this.plotOptions.toPlotOptions());
        chartOptions.setTooltip(this.tooltip.toTooltip());
        chartOptions.setStroke(this.stroke.toStroke());
        return chartOptions;
    }
}
