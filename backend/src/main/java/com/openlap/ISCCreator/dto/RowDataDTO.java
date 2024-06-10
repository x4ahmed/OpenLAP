package com.openlap.ISCCreator.dto;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.openlap.ISCCreator.model.RowData;

import java.util.HashMap;
import java.util.Map;

public class RowDataDTO {
    private String id;
    private Map<String, Object> other = new HashMap<>();

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    @JsonAnyGetter
    public Map<String, Object> getOther() {
        return other;
    }

    @JsonAnySetter
    public void setOther(String name, Object value) {
        other.put(name, value);
    }

    public RowData toRowData() {
        RowData rowData = new RowData();
        rowData.setId(this.id);
        rowData.setValues(this.other);
        return rowData;
    }
}