package com.openlap.ISCCreator.model;

import java.util.List;

public class IndicatorData {
    private List<RowData> rowData;
    private List<ColumnData> columnData;
    private boolean status;

    // Getters and Setters

    public List<RowData> getRowData() {
        return rowData;
    }

    public void setRowData(List<RowData> rowData) {
        this.rowData = rowData;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public List<ColumnData> getColumnData() {
        return columnData;
    }

    public void setColumnData(List<ColumnData> columnData) {
        this.columnData = columnData;
    }
}
