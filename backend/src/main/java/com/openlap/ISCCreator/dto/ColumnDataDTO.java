package com.openlap.ISCCreator.dto;

import com.openlap.ISCCreator.model.ColumnData;

public class ColumnDataDTO {
    private String field;
    private String headerName;
    private boolean sortable;
    private boolean editable;
    private int width;
    private String type;


    public String getField() {
        return field;
    }

    public void setField(String field) {
        this.field = field;
    }

    public String getHeaderName() {
        return headerName;
    }

    public void setHeaderName(String headerName) {
        this.headerName = headerName;
    }

    public boolean isSortable() {
        return sortable;
    }

    public void setSortable(boolean sortable) {
        this.sortable = sortable;
    }

    public boolean isEditable() {
        return editable;
    }

    public void setEditable(boolean editable) {
        this.editable = editable;
    }

    public int getWidth() {
        return width;
    }

    public void setWidth(int width) {
        this.width = width;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public ColumnData toColumnData() {
        ColumnData columnData = new ColumnData();
        columnData.setField(this.field);
        columnData.setHeaderName(this.headerName);
        columnData.setSortable(this.sortable);
        columnData.setEditable(this.editable);
        columnData.setWidth(this.width);
        columnData.setType(this.type);
        return columnData;
    }
}
