package com.openlap.AnalyticsEngine.security.handler;

import com.google.gson.Gson;
import com.openlap.AnalyticsEngine.model.Msg;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

//无权访问
@Component
public class AccessDeny implements AccessDeniedHandler{
    @Autowired
    Gson gson;

    @Override
    public void handle(HttpServletRequest request, HttpServletResponse response, AccessDeniedException e) throws IOException, ServletException {
        response.setContentType("application/json;charset=utf-8");
        response.sendError(HttpServletResponse.SC_NON_AUTHORITATIVE_INFORMATION, "No Authorities!");

    }
}
