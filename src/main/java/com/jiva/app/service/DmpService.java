package com.jiva.app.service;

import java.util.Map;

import org.springframework.data.domain.Page;

import com.jiva.app.dtos.ResponseMessage;

public interface DmpService {

	ResponseMessage sendAlert_service(Map<String, Object> reqParam);

}
