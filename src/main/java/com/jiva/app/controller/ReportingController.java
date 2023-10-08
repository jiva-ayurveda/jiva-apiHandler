package com.jiva.app.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jiva.app.dtos.ResponseHandler;
import com.jiva.app.service.ReportingService;

@RestController
@RequestMapping("/api")
public class ReportingController {
	
	@Autowired
	ReportingService reportService;

	@PostMapping("/callList/rdd/comment")
	public ResponseHandler rddComment(@RequestBody Map<String,Object> reqParam){
		ResponseHandler responseHandler=null;
		try {
			responseHandler =reportService.addRddComment_service(reqParam);
			return responseHandler;
		}catch(Exception e) {
			e.printStackTrace();
			return responseHandler;
		}
	}
	
	@PostMapping("/callList/courtesy/comment")
	public ResponseHandler courtesyComment(@RequestBody Map<String,Object> reqParam){
		ResponseHandler responseHandler=null;
		try {
			responseHandler=reportService.addCourtesyComment_service(reqParam);
			return responseHandler;
		}catch(Exception e) {
			e.printStackTrace();
			return responseHandler;
		}
	}
}
