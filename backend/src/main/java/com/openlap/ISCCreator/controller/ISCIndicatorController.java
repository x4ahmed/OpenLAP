package com.openlap.ISCCreator.controller;
import com.openlap.ISCCreator.dto.ISCIndicatorDTO;
import com.openlap.ISCCreator.model.ISCIndicator;
import com.openlap.ISCCreator.service.ISCIndicatorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/isc-indicator/")
public class ISCIndicatorController {

    @Autowired
    private ISCIndicatorService iscIndicatorService;

    @PostMapping("/SaveISCIndicator")
    @ResponseBody
    public boolean SaveISCIndicator(@RequestBody ISCIndicatorDTO iscIndicatorDTO, HttpServletRequest request) {
        if(iscIndicatorDTO == null || iscIndicatorDTO.getIscJsonString() == null || iscIndicatorDTO.getIscJsonString().isEmpty())
            return false;

        return iscIndicatorService.saveISCIndicator(iscIndicatorDTO, request);
    }

    @GetMapping("/GetISCIndicatorsForUser")
    @ResponseBody
    public List<ISCIndicator> GetISCIndicatorsForUser(HttpServletRequest request) {
        return iscIndicatorService.getISCIndicatorsForUser(request);
    }

    @PutMapping("/UpdateISCIndicator")
    @ResponseBody
    public boolean UpdateISCIndicator(@RequestBody ISCIndicatorDTO iscIndicatorDTO, HttpServletRequest request) {
        if(iscIndicatorDTO == null || iscIndicatorDTO.getId() == null || iscIndicatorDTO.getId().isEmpty())
            return false;

        return iscIndicatorService.updateISCIndicator(iscIndicatorDTO, request);
    }

    @PostMapping("/DeleteISCIndicator")
    @ResponseBody
    public boolean DeleteISCIndicator(@RequestBody ArrayList<ISCIndicatorDTO> iscIndicatorIds, HttpServletRequest request) {
        if(iscIndicatorIds == null || iscIndicatorIds.isEmpty())
            return false;

        return iscIndicatorService.deleteISCIndicator(iscIndicatorIds, request);
    }

    @PostMapping("/ImportBulkISCIndicators")
    @ResponseBody
    public boolean ImportBulkISCIndicators(@RequestBody ArrayList<ISCIndicatorDTO> iscIndicatorDTOs, HttpServletRequest request) {
        if(iscIndicatorDTOs == null || iscIndicatorDTOs.isEmpty())
            return false;

        return iscIndicatorService.importBulkISCIndicators(iscIndicatorDTOs, request);
    }

}
