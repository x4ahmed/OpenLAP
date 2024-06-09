package com.openlap.ISCCreator.dto;

import com.openlap.ISCCreator.model.Tooltip;

public class TooltipDTO {
    private boolean enabled;
    private boolean followCursor;
    private String theme;
    private OnDatasetHoverDTO onDatasetHover;

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

    public OnDatasetHoverDTO getOnDatasetHover() {
        return onDatasetHover;
    }

    public void setOnDatasetHover(OnDatasetHoverDTO onDatasetHoverDTO) {
        this.onDatasetHover = onDatasetHoverDTO;
    }

    public Tooltip toTooltip() {
        Tooltip tooltip = new Tooltip();
        tooltip.setEnabled(this.enabled);
        tooltip.setFollowCursor(this.followCursor);
        tooltip.setTheme(this.theme);
        tooltip.setOnDatasetHover(this.onDatasetHover.toOnDatasetHover());
        return tooltip;
    }
}
