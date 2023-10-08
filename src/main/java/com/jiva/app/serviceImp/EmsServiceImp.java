package com.jiva.app.serviceImp;

import java.net.URLEncoder;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import com.jiva.app.dtos.ResponseMessage;
import com.jiva.app.dtos.WhatsappRequest;
import com.jiva.app.dtos.WhatsappResponse;
import com.jiva.app.reposistory.EmsRepository;
import com.jiva.app.reposistory.GlobalRepo;
import com.jiva.app.service.EmsService;
import com.jiva.app.utils.helper;

@Service
public class EmsServiceImp implements EmsService {

	Logger logger = LoggerFactory.getLogger(EmsServiceImp.class);
	
	@Autowired
	private GlobalRepo globalRepo;
	
	@Autowired
	private EmsRepository emsRepo;
	
	@Autowired
	private WhatsappServiceImp whatsappService;

	@Override
    public ResponseMessage sendProgramDocumentAlert_service(Map<String,Object> reqParam) {
    	 WhatsappResponse whatsResponse = null;
    	 ResponseMessage responseHandler = new ResponseMessage();
    	 
    	 // Paras request Param.
    	 String dhanId=String.valueOf(reqParam.get("caseId"));
    	 String programType=String.valueOf(reqParam.get("programType"));
    	 String filePath=String.valueOf(reqParam.get("filePath"));
    	 
	    try {
	    	// Retrive Patients Info
	    	 Map<String,Object> patientDetails=globalRepo.whatsappPatientDetails(dhanId);
	    	 
	    	 // Prepared Params
	    	 String name=String.valueOf(patientDetails.get("patientName"));
	    	 String phoneNo=String.valueOf(patientDetails.get("whatsappNo"));
	    	 
	    	 //Encode Params.
	    	 String patientName=URLEncoder.encode(name, "UTF-8");
	    	 
	    	 String mText="",filename="",sentFor="";
	    	 if(programType.equalsIgnoreCase("weight")) {
	    		 mText = "Dear+%2AHealth+Seeker%2C%2A%0A%0AAs+a+part+of+%2AJiva+Weight+Management+Program%2A+please+find+attached+your+personalized+%2ANutrition+Plan%2A.+You+are+advised+to+start+this+plan+immediately+for+achieving+your+health+goals.+For+any+kind+of+queries+please+connect+with+your+Nutritionist.+%0A%0A%F0%9F%99%8F+_Caring+for+you_%0A%2AJiva+Ayurveda%2A%0Awww.Jiva.com";
	    		 filename="WMP";
	    		 sentFor="WMP_EMS";
	    	 }else if(programType.equalsIgnoreCase("yoga")) {
	    		 Map<String,Object> yogaAppointDetails=globalRepo.getYogaAppointmentDetailsByCaseId(dhanId);
	    		 //Encode Params.
	    		 String docName=URLEncoder.encode(String.valueOf(yogaAppointDetails.get("docName")), "UTF-8");
	    		 
	    		 mText = "Dear+%2A"+patientName+"%2A%2C%0A%0AThank+you+for+consulting+Jiva+Ayurveda%21%0A%0AYour+Yoga+Therapist+"+docName+"+has+designed+a+%2Apersonalised+Yoga+Therapy+Routine%2A+based+on+your+last+session.+%E2%9C%A8%0A%0AIt+contains+a+curated+list+of+Asanas%2C+breathing+exercises%2C+mantra+chanting+and+meditation+techniques+to+%2Aspeed+up+your+healing+journey%2A.%0A%0AWe+recommend+you+keep+practising+it+to+see+the+benefits+soon%21+Our+experts+are+here+to+guide+you+every+step+of+the+way.%0A%0AThank+you+for+choosing+Jiva+Ayurveda+and+%2Awishing+you+a+healthy+journey%2A%21%0A%0ACaring+for+you%2C+%F0%9F%99%8F%0A%2AJiva+Ayurveda%2A%0Awww.jiva.com";
	    		 filename="YMP";
	    		 sentFor="YMP_EMS";
	    	 }else {
	    		responseHandler.setStatusCode(404);
	 			responseHandler.setMessage("Program Configuration Not found.");
	 			return responseHandler;
	    	 }

	    	 whatsResponse =  whatsappService.sendWhatsappDocument(phoneNo, mText,filePath ,filename);
		     logger.info(mText); 
		     
		     if (whatsResponse != null && whatsResponse.getResponseStatus().equalsIgnoreCase("success")) {
					mText = mText.replace("'", "");
					WhatsappRequest request = new WhatsappRequest();
					request.setOrderCode("0");
					request.setDhanId(dhanId);
					request.setWhatsappId(whatsResponse.getWhatsappId());
					request.setMobileNo(phoneNo);
					request.setStatus(whatsResponse.getResponseStatus());
					request.setSentFor(sentFor);
					request.setGrpId("0");
					request.setSmsText(mText);
					globalRepo.saveWhatsappResponse(request);
					
					 responseHandler.setStatusCode(200);
		 			responseHandler.setMessage("Send Successfully.");
		 			return responseHandler;
			}else {
				responseHandler.setStatusCode(201);
		 		responseHandler.setMessage("Error in sending alert.");
		 	    return responseHandler;
			}
	    	 
		  
	    	
	    }catch(Exception e) {
	    	logger.error("Error in sendProgramDocumentAlert_service ->"+e.getMessage());
	    	responseHandler.setStatusCode(500);
 			responseHandler.setMessage("Error is sending Alert.");
 			return responseHandler;
	    }
    }
   

	@Override
	public Page<?> getProgramDocumentByCaseId_service(Map<String, Object> reqParam) throws Exception {
		// TODO Auto-generated method stub
	
		Pageable pageable=PageRequest.of(Integer.parseInt((String) reqParam.get("pageIndex")),
				Integer.parseInt((String) reqParam.get("pageSize")));
		return emsRepo.programDocumentByCaseId_repo(reqParam, pageable);
	}
    
}
