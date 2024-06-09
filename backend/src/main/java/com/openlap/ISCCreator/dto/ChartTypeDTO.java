package com.openlap.ISCCreator.dto;

import com.openlap.ISCCreator.model.ChartType;

import java.util.List;

public class ChartTypeDTO {
    private String image;
    private String code;
    private String name;
    private List<String> types;
    private int Categorical;
    private int Numerical;
    private int CategoricalOrdinal;
    private String description;
    private String shortDesc;
    private String descImg1;
    private String descImg2;
    private String link;

    // Getters and Setters

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<String> getTypes() {
        return types;
    }

    public void setTypes(List<String> types) {
        this.types = types;
    }

    public int getNumerical() {
        return Numerical;
    }

    public void setNumerical(int numerical) {
        Numerical = numerical;
    }

    public int getCategorical() {
        return Categorical;
    }

    public void setCategorical(int categorical) {
        Categorical = categorical;
    }

    public int getCategoricalOrdinal() {
        return CategoricalOrdinal;
    }

    public void setCategoricalOrdinal(int categoricalOrdinal) {
        CategoricalOrdinal = categoricalOrdinal;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getShortDesc() {
        return shortDesc;
    }

    public void setShortDesc(String shortDesc) {
        this.shortDesc = shortDesc;
    }

    public String getDescImg1() {
        return descImg1;
    }

    public void setDescImg1(String descImg1) {
        this.descImg1 = descImg1;
    }

    public String getDescImg2() {
        return descImg2;
    }

    public void setDescImg2(String descImg2) {
        this.descImg2 = descImg2;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public ChartType toChartType() {
        ChartType chartType = new ChartType();
        chartType.setCode(this.code);
        chartType.setName(this.name);
        chartType.setTypes(this.types);
        chartType.setNumerical(this.Numerical);
        chartType.setCategorical(this.Categorical);
        chartType.setCategoricalOrdinal(this.CategoricalOrdinal);
        chartType.setDescription(this.description);
        chartType.setShortDesc(this.shortDesc);
        chartType.setDescImg1(this.descImg1);
        chartType.setDescImg2(this.descImg2);
        chartType.setLink(this.link);
        return chartType;
    }
}
