package com.openlap.ISCCreator.model;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Type;
import org.hibernate.search.bridge.spi.FieldType;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import javax.persistence.GeneratedValue;
import java.util.List;

@Document(collection = "ISCIndicator")
public class ISCIndicator {
    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    private String id;

    @Field(value = "id")
    private String reactId;
    private String createdBy;
    private String chartName;
    private ChartOptions chartOptions;
    private List<ChartSeries> chartSeries;
    private ChartType chartType;
    private IndicatorData indicatorData;
    private IndicatorGoal indicatorGoal;
    private String indicatorGoalText;
    private String indicatorName;
    private String indicatorQuestion;
    private List<IndicatorDataArray> indicatorDataArray;
    private String lastUpdated;

    // Getters and Setters

    public String getReactId() {
        return reactId;
    }

    public void setReactId(String reactId) {
        this.reactId = reactId;
    }

    public String getChartName() {
        return chartName;
    }

    public void setChartName(String chartName) {
        this.chartName = chartName;
    }

    public ChartOptions getChartOptions() {
        return chartOptions;
    }

    public void setChartOptions(ChartOptions chartOptions) {
        this.chartOptions = chartOptions;
    }

    public List<ChartSeries> getChartSeries() {
        return chartSeries;
    }

    public void setChartSeries(List<ChartSeries> chartSeries) {
        this.chartSeries = chartSeries;
    }

    public ChartType getChartType() {
        return chartType;
    }

    public void setChartType(ChartType chartType) {
        this.chartType = chartType;
    }

    public IndicatorData getIndicatorData() {
        return indicatorData;
    }

    public void setIndicatorData(IndicatorData indicatorData) {
        this.indicatorData = indicatorData;
    }

    public IndicatorGoal getIndicatorGoal() {
        return indicatorGoal;
    }

    public void setIndicatorGoal(IndicatorGoal indicatorGoal) {
        this.indicatorGoal = indicatorGoal;
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

    public List<IndicatorDataArray> getIndicatorDataArray() {
        return indicatorDataArray;
    }

    public void setIndicatorDataArray(List<IndicatorDataArray> indicatorDataArray) {
        this.indicatorDataArray = indicatorDataArray;
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

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
}