package com.jiva.app.service;

import java.util.Map;

import org.springframework.data.domain.Page;

import com.jiva.app.dtos.ResponseMessage;

public interface EmsService {

	Page<?> getProgramDocumentByCaseId_service(Map<String, Object> reqParam) throws Exception;

	ResponseMessage sendProgramDocumentAlert_service(Map<String, Object> reqParam);

}
