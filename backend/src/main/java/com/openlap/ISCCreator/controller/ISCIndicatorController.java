package com.openlap.ISCCreator.controller;
import com.openlap.ISCCreator.dto.ISCIndicatorDTO;
import com.openlap.ISCCreator.model.ISCIndicator;
import com.openlap.ISCCreator.service.ISCIndicatorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@RequestMapping("/isc-indicator/")
public class ISCIndicatorController {

    @Autowired
    private ISCIndicatorService iscIndicatorService;

    @PostMapping("/SaveISCIndicator")
    @ResponseBody
    public boolean SaveISCIndicator(@RequestBody ISCIndicatorDTO iscIndicatorDTO, HttpServletRequest request) {
        return iscIndicatorService.saveISCIndicator(iscIndicatorDTO, request);
    }

    @GetMapping("/GetISCIndicatorsForUser")
    @ResponseBody
    public List<ISCIndicator> GetISCIndicatorsForUser(HttpServletRequest request) {
        return iscIndicatorService.getISCIndicatorsForUser(request);
    }

}
