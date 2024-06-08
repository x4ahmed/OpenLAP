package com.openlap.ISCCreator.model;

public class Tooltip {
    private boolean enabled;
    private boolean followCursor;
    private String theme;
    private OnDatasetHover onDatasetHover;

    // Getters and Setters

    public boolean isEnabled() {
        return enabled;
    }

    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }

    public boolean isFollowCursor() {
        return followCursor;
    }

    public void setFollowCursor(boolean followCursor) {
        this.followCursor = followCursor;
    }

    public String getTheme() {
        return theme;
    }

    public void setTheme(String theme) {
        this.theme = theme;
    }

    public OnDatasetHover getOnDatasetHover() {
        return onDatasetHover;
    }

    public void setOnDatasetHover(OnDatasetHover onDatasetHover) {
        this.onDatasetHover = onDatasetHover;
    }
}
