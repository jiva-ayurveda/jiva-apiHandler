package com.jiva.app.serviceImp;

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jiva.app.dtos.ResponseMessage;
import com.jiva.app.reposistory.DmpRepo;
import com.jiva.app.reposistory.GlobalRepo;
import com.jiva.app.service.DmpService;

@Service
public class DmpServiceImp implements DmpService {

	Logger logger = LoggerFactory.getLogger(EmsServiceImp.class);
	
	@Autowired
	private GlobalRepo globalRepo;
	
	@Autowired
	private DmpRepo dmpRepo;
	
	@Autowired
	private WhatsappServiceImp whatsappService;
	
	@Override
	public ResponseMessage sendAlert_service(Map<String, Object> reqParam) {
		// TODO Auto-generated method stub
		 ResponseMessage responseHandler = new ResponseMessage();
		 
		 try {
			 
			 dmpRepo.updateTokenAlert(reqParam);
			 
		 }catch(Exception e) {
			logger.error("Error in sendAlert_service (DMPServiceImp) ->"+e.getMessage());
	    	responseHandler.setStatusCode(500);
 			responseHandler.setMessage("Error is sending Alert.");
 			return responseHandler;
		 }
		 
		 responseHandler.setStatusCode(200);
		 responseHandler.setMessage("Send Successfully.");
		 return responseHandler;
	
	}

}
