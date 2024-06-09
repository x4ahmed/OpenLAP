package com.openlap.ISCCreator.dto;

import com.openlap.ISCCreator.model.ISCIndicator;

import java.util.List;
import java.util.stream.Collectors;

public class ISCIndicatorDTO {
    private String id;
    private String createdBy;
    private String chartName;
    private ChartOptionsDTO chartOptions;
    private List<Integer> chartSeries;
    private ChartTypeDTO chartTypeDTO;
    private IndicatorDataDTO indicatorData;
    private IndicatorGoalDTO indicatorGoal;
    private String indicatorGoalText;
    private String indicatorName;
    private String indicatorQuestion;
    private List<IndicatorDataArrayDTO> indicatorDataArray;
    private String lastUpdated;

    // Getters and Setters

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getChartName() {
        return chartName;
    }

    public void setChartName(String chartName) {
        this.chartName = chartName;
    }

    public ChartOptionsDTO getChartOptions() {
        return chartOptions;
    }

    public void setChartOptions(ChartOptionsDTO chartOptionsDTO) {
        this.chartOptions = chartOptionsDTO;
    }

    public List<Integer> getChartSeries() {
        return chartSeries;
    }

    public void setChartSeries(List<Integer> chartSeries) {
        this.chartSeries = chartSeries;
    }

    public ChartTypeDTO getChartType() {
        return chartTypeDTO;
    }

    public void setChartType(ChartTypeDTO chartTypeDTO) {
        this.chartTypeDTO = chartTypeDTO;
    }

    public IndicatorDataDTO getIndicatorData() {
        return indicatorData;
    }

    public void setIndicatorData(IndicatorDataDTO indicatorDataDTO) {
        this.indicatorData = indicatorDataDTO;
    }

    public IndicatorGoalDTO getIndicatorGoal() {
        return indicatorGoal;
    }

    public void setIndicatorGoal(IndicatorGoalDTO indicatorGoalDTO) {
        this.indicatorGoal = indicatorGoalDTO;
    }

    public String getIndicatorGoalText() {
        return indicatorGoalText;
    }

    public void setIndicatorGoalText(String indicatorGoalText) {
        this.indicatorGoalText = indicatorGoalText;
    }

    public String getIndicatorName() {
        return indicatorName;
    }

    public void setIndicatorName(String indicatorName) {
        this.indicatorName = indicatorName;
    }

    public String getIndicatorQuestion() {
        return indicatorQuestion;
    }

    public void setIndicatorQuestion(String indicatorQuestion) {
        this.indicatorQuestion = indicatorQuestion;
    }

    public List<IndicatorDataArrayDTO> getIndicatorDataArray() {
        return indicatorDataArray;
    }

    public void setIndicatorDataArray(List<IndicatorDataArrayDTO> indicatorDataArrayDTO) {
        this.indicatorDataArray = indicatorDataArrayDTO;
    }

    public String getLastUpdated() {
        return lastUpdated;
    }

    public void setLastUpdated(String lastUpdated) {
        this.lastUpdated = lastUpdated;
    }

    public String getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }

    public ISCIndicator toISCIndicator() {
        ISCIndicator iscIndicator = new ISCIndicator();
        iscIndicator.setId(this.id);
        iscIndicator.setCreatedBy(this.createdBy);
        iscIndicator.setChartName(this.chartName);
        iscIndicator.setChartOptions(this.chartOptions.toChartOptions());
        iscIndicator.setChartSeries(this.chartSeries);
        iscIndicator.setChartType(this.chartTypeDTO.toChartType());
        iscIndicator.setIndicatorData(this.indicatorData.toIndicatorData());
        iscIndicator.setIndicatorGoal(this.indicatorGoal.toIndicatorGoal());
        iscIndicator.setIndicatorGoalText(this.indicatorGoalText);
        iscIndicator.setIndicatorName(this.indicatorName);
        iscIndicator.setIndicatorQuestion(this.indicatorQuestion);
        iscIndicator.setIndicatorDataArray(this.indicatorDataArray.stream().map(IndicatorDataArrayDTO::toIndicatorDataArray).collect(Collectors.toList()));
        iscIndicator.setLastUpdated(this.lastUpdated);
        return iscIndicator;
    }
}
