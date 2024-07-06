package com.openlap.ISCCreator.service;

import com.openlap.ISCCreator.dto.ISCIndicatorDTO;
import com.openlap.ISCCreator.model.ISCIndicator;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.List;


public interface ISCIndicatorService {

    public boolean saveISCIndicator(ISCIndicatorDTO iscIndicatorDTO, HttpServletRequest request);

    public boolean deleteISCIndicator(List<ISCIndicatorDTO> iscIndicatorIds, HttpServletRequest request);

    public boolean updateISCIndicator(ISCIndicatorDTO iscIndicatorDTO, HttpServletRequest request);

    public List<ISCIndicator> getISCIndicatorsForUser(HttpServletRequest request);
}
