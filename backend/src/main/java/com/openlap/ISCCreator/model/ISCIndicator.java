package com.openlap.ISCCreator.model;
import com.openlap.AnalyticsEngine.model.OpenLapUser;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Type;
import org.hibernate.search.bridge.spi.FieldType;
import org.json.JSONObject;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
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

    @DBRef
    private OpenLapUser createdBy;

    private String iscJsonString;


    // Getters and Setters

    public ISCIndicator() {
    }

    public ISCIndicator(String iscJsonString, OpenLapUser createdBy) {
        this.iscJsonString = iscJsonString;
        this.createdBy = createdBy;
    }

    public ISCIndicator(String iscJsonString, OpenLapUser createdBy, String id) {
        this.iscJsonString = iscJsonString;
        this.createdBy = createdBy;
        this.id = id;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getIscJsonString() {
        return iscJsonString;
    }

    public void setIscJsonString(String iscJsonString) {
        this.iscJsonString = iscJsonString;
    }

    public OpenLapUser getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(OpenLapUser createdBy) {
        this.createdBy = createdBy;
    }

    public String extractISCFrontendIdFromJsonString(String jsonString) {
        try {
            JSONObject jsonObject = new JSONObject(jsonString);
            return jsonObject.getString("id");
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
}
