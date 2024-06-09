package com.openlap.ISCCreator.dto;

import com.openlap.ISCCreator.model.IndicatorData;

import java.util.List;
import java.util.stream.Collectors;

public class IndicatorDataDTO {
    private List<RowDataDTO> rowDatumDTOS;
    private List<ColumnDataDTO> columnDatumDTOS;
    private boolean status;

    // Getters and Setters

    public List<RowDataDTO> getRowData() {
        return rowDatumDTOS;
    }

    public void setRowData(List<RowDataDTO> rowDatumDTOS) {
        this.rowDatumDTOS = rowDatumDTOS;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public List<ColumnDataDTO> getColumnData() {
        return columnDatumDTOS;
    }

    public void setColumnData(List<ColumnDataDTO> columnDatumDTOS) {
        this.columnDatumDTOS = columnDatumDTOS;
    }

    public IndicatorData toIndicatorData() {
        IndicatorData indicatorData = new IndicatorData();
        indicatorData.setRowData(rowDatumDTOS.stream().map(RowDataDTO::toRowData).collect(Collectors.toList()));
        indicatorData.setColumnData(columnDatumDTOS.stream().map(ColumnDataDTO::toColumnData).collect(Collectors.toList()));
        indicatorData.setStatus(status);
        return indicatorData;
    }
}
