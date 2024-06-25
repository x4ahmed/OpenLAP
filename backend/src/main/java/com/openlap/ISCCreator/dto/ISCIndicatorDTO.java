package com.openlap.ISCCreator.dto;

import com.openlap.ISCCreator.model.ISCIndicator;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class ISCIndicatorDTO {
    private String iscJsonString;

    // Getters and Setters

    public ISCIndicatorDTO() {
    }

    public ISCIndicatorDTO(String iscJsonString) {
        this.iscJsonString = iscJsonString;
    }

    public String getIscJsonString() {
        return iscJsonString;
    }

    public void setIscJsonString(String iscJsonString) {
        this.iscJsonString = iscJsonString;
    }

}
