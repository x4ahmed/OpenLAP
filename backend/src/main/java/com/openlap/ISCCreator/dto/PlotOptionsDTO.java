package com.openlap.ISCCreator.dto;

import com.openlap.ISCCreator.model.PlotOptions;

public class PlotOptionsDTO {
    private BarDTO bar;

    // Getters and Setters

    public BarDTO getBar() {
        return bar;
    }

    public void setBar(BarDTO bar) {
        this.bar = bar;
    }

    public PlotOptions toPlotOptions() {
        PlotOptions plotOptions = new PlotOptions();
        plotOptions.setBar(this.bar.toBar());
        return plotOptions;
    }
}
