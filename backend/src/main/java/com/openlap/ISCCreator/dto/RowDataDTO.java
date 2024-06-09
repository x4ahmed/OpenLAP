package com.openlap.ISCCreator.dto;

import com.openlap.ISCCreator.model.RowData;

import java.util.Map;

public class RowDataDTO {
    private String id;
    private Map<String, Object> values;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Map<String, Object> getValues() {
        return values;
    }

    public void setValues(Map<String, Object> values) {
        this.values = values;
    }

    public RowData toRowData() {
        RowData rowData = new RowData();
        rowData.setId(this.id);
        rowData.setValues(this.values);
        return rowData;
    }

}
