package com.jiva.app.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.jiva.app.dtos.ResponseMessage;
import com.jiva.app.service.EmsService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api/ems")
public class EmsController {

	@Autowired
	private EmsService emsService;
	
	@GetMapping("/program-document/bycaseId")
	private ResponseEntity<Page<?>> getProgramDocumentByCaseId(@RequestParam Map<String,Object> reqParam) throws Exception{
		Page<?> paging=emsService.getProgramDocumentByCaseId_service(reqParam);
		return ResponseEntity.ok().body(paging);
	}
	
	@PostMapping("/program-document/sendPdf")
	private ResponseMessage sendProgramDocumentAlert(@RequestBody Map<String,Object> reqParam){
		return emsService.sendProgramDocumentAlert_service(reqParam);
	}
	
}
