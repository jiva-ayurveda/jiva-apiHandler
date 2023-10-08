package com.jiva.app.service;

import java.util.Map;

import com.jiva.app.dtos.ResponseHandler;

public interface ReportingService {

	ResponseHandler addRddComment_service(Map<String, Object> reqParam);

	ResponseHandler addCourtesyComment_service(Map<String, Object> reqParam);

}
