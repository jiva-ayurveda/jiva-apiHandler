package com.jiva.app.serviceImp;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jiva.app.dtos.ResponseHandler;
import com.jiva.app.reposistory.ReportingRepo;
import com.jiva.app.service.ReportingService;

@Service
public class ReportingServiceImp implements ReportingService {

	@Autowired
	private ReportingRepo reportingRepo;
	
	@Override
	public ResponseHandler addRddComment_service(Map<String, Object> reqParam) {
		// TODO Auto-generated method stub
		
		String message=reportingRepo.updateRddListComment(reqParam);
		
		ResponseHandler responseHandler = new ResponseHandler();
		responseHandler.setStatus(200);
		responseHandler.setStatusCode(false);
		responseHandler.setMessage(message);
	
		return responseHandler;
		
	}

	@Override
	public ResponseHandler addCourtesyComment_service(Map<String, Object> reqParam) {
		// TODO Auto-generated method stub
		
		String message=reportingRepo.updateCourtesyListComment(reqParam);
		
		ResponseHandler responseHandler = new ResponseHandler();
		responseHandler.setStatus(200);
		responseHandler.setStatusCode(false);
		responseHandler.setMessage(message);
	
		return responseHandler;
	}

}
