package com.jiva.app.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jiva.app.dtos.ResponseMessage;
import com.jiva.app.service.DmpService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api/dmp")
public class DMP_Controller {

	@Autowired
	private DmpService dmpService;
	
	@PostMapping("/send/alert")
	private ResponseMessage sendAlert(@RequestBody Map<String,Object> reqParam) throws Exception{
		return dmpService.sendAlert_service(reqParam);
	}
	
}
