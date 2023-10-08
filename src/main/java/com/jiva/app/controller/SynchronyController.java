package com.jiva.app.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.jiva.app.dtos.AppointmetStatusData;
import com.jiva.app.dtos.CaseClosureDto;
import com.jiva.app.dtos.CaseNotesDto;
import com.jiva.app.dtos.ClinicAppointmentDto;
import com.jiva.app.dtos.ClinicApptRequestDto;
import com.jiva.app.dtos.ClinicFreshCallDto;
import com.jiva.app.dtos.CreateContactDto;
import com.jiva.app.dtos.IperformanceObDto;
import com.jiva.app.dtos.PatientDataRequest;
import com.jiva.app.dtos.PatientDataResponse;
import com.jiva.app.dtos.ResponseMessage;
import com.jiva.app.dtos.SMSDetails;
import com.jiva.app.dtos.WacDto;
import com.jiva.app.dtos.WacVCRequestDto;
import com.jiva.app.service.SynchronyService;

import io.swagger.annotations.ApiOperation;

import java.util.List;
import java.util.Map;

import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;


@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(value = "*")
public class SynchronyController {

	
	@Autowired
	private SynchronyService service;
	
	@GetMapping("/getPatientData")
	@ApiOperation("Summary :  Api to get patient details via patientrequest dto. || "
			+ "  Description: Api to get patient details via patientrequest dto. (Used in crm) ||"
			+ "  Params :Patientrequest Dto * || "
			+ "  Developer : @Dheeraj  ")
	ResponseEntity<PatientDataResponse> getPatientData(@RequestBody PatientDataRequest requestData){
		PatientDataResponse response = service.getPatientDataList(requestData);
		return new ResponseEntity<PatientDataResponse>(response,HttpStatus.OK);
	}
    
	@GetMapping("/getClinicUserName")
	@ApiOperation("Summary :  Api to get the clinic username via the clinic group. || "
			+ "  Description: Api to get the clinic username via the clinic group. (Used in crm) ||"
			+ "  Params : Clinic group * || "
			+ "  Developer : @Dheeraj  ")
	ResponseEntity<String> getClinicUserNameByCode(@Valid @RequestParam("groupName") @NotBlank(message = "Group name should not be empty.") String groupName){
		return new ResponseEntity<String>(service.getClinicUserNameByCode(groupName),HttpStatus.OK);
	}
	
	@GetMapping("/getApptCountByGroup")
	@ApiOperation("Summary : Api to get the appointmentcount with a appointment date and clinic group. || "
			+ "  Description: Api to get the appointmentcount with a appointment date and clinic group. (Used in crm) ||"
			+ "  Params : Appointment date and Clinic group * || "
			+ "  Developer : @Dheeraj  ")
	ResponseEntity<Integer> getApptCountByGroup(@Valid @RequestBody ClinicAppointmentDto apptDto){
		return new ResponseEntity<Integer>(service.getClinicApptByGroupName(apptDto),HttpStatus.OK);
	}
	
	@PostMapping("/saveClinicAppointment")
	@ApiOperation("Summary : Api to Save clinic appointment in dhanvantai. || "
			+ "  Description: Api to Save clinic appointment in dhanvantai via ClinicApptRequestDto Dto. (Used in crm) ||"
			+ "  Params : ClinicApptRequestDto Dto * || "
			+ "  Developer : @Dheeraj  ")
	ResponseEntity<String> saveClinicAppointment(@Valid @RequestBody ClinicApptRequestDto request){
		return new ResponseEntity<String>(service.createClinicAppt(request),HttpStatus.OK);
	}
	
	@GetMapping("/getConsultationStatus")
	@ApiOperation("Summary : Api to get consultation form status. || "
			+ "  Description: Api to  get consultation form status via dhanvantari Id. (Used in crm) ||"
			+ "  Params : DhanId * || "
			+ "  Developer : @Dheeraj  ")
	ResponseEntity<String> getConsultFormStatus(@Valid @RequestParam("dhanId") String dhanId){
		return new ResponseEntity<String>(service.getConsultationFormStatus(dhanId),HttpStatus.OK);
	}
	
	/*ostMapping("/saveShareChat")
	ResponseEntity<ResponseMessage> saveShareChat(@RequestBody ShareChatRequestDto requestDto){
		return new ResponseEntity<ResponseMessage>(service.getSahreChatData(requestDto),HttpStatus.OK);
	}*/
	
	@PostMapping("/getIPOutbound")
	@ApiOperation("Summary : Api to save IP Outbound details. || "
			+ "  Description: Api to Api to save IP Outbound details via IperformanceObDto Dto. (Used by vendor) ||"
			+ "  Params : IperformanceObDto Dto * || "
			+ "  Developer : @Dheeraj  ")
	ResponseEntity<ResponseMessage> getIPOutbound(@Valid @RequestBody IperformanceObDto requestDto){
		return new ResponseEntity<ResponseMessage>(service.getIPerformanceOutbound(requestDto),HttpStatus.OK);
	}
	
	@PostMapping("/saveSms")
	@ApiOperation("Summary : Api to save sms details in dhanvantari. || "
			+ "  Description: Api to save sms details in dhanvantari via SMSDetails Dto. (Used in crm) ||"
			+ "  Params : SMSDetails Dto * || "
			+ "  Developer : @Dheeraj  ")
	ResponseEntity<String> saveSmsDetails(@Valid @RequestBody SMSDetails details){
		return new ResponseEntity<String>(service.saveDhanSms(details),HttpStatus.OK);
	}
	
	@PostMapping("/createDhanId")
	@ApiOperation("Summary : Api to Create new contact for World ayurbeda congress program via mobile number. || "
			+ "  Description: Api to Create new contact for World ayurbeda congress program via mobile number . (Used in WAC) ||"
			+ "  Params : WacDto Dto * || "
			+ "  Developer : @Dheeraj  ")
	ResponseEntity<ResponseMessage> createDhanId(@RequestBody WacDto wacDto){
		return new ResponseEntity<ResponseMessage>(service.createDhanvantariid(wacDto),HttpStatus.OK);
	}
	
	@PostMapping("/createVC")
	@ApiOperation("Summary : Api to send Video consultation sms on whatsapp to patient and doctor. || "
			+ "  Description: Api to send Video consultation sms on whatsapp to patient and doctor via  WacVCRequestDto Dto. (Used in WAC) ||"
			+ "  Params : WacVCRequestDto Dto * || "
			+ "  Developer : @Dheeraj  ")
	ResponseEntity<ResponseMessage> createVC(@RequestBody WacVCRequestDto requestDto){
		return new ResponseEntity<ResponseMessage>(service.createVideoLink(requestDto),HttpStatus.OK);
	}
	
	
	/*@GetMapping("/updateBotPayment")
	ResponseEntity<ResponseMessage> updateBotPayment(@RequestParam("botid") String botid,@RequestParam("amount") String amount,@RequestParam("status") String status){
		return new ResponseEntity<ResponseMessage>(service.updateBotPayment(botid, amount, status),HttpStatus.OK);
	}*/
	
	/*@GetMapping("/getBotPaymentStatus")
	@ApiOperation("Get the status of a bot's payments using phone number and bot ID. (Used in JivaReportingPanel)")
	ResponseEntity<ResponseMessage> getPaymentStatus(@RequestParam("phone") String phone,@RequestParam("botId") String botId){
		return new ResponseEntity<ResponseMessage>(service.getBotPaymentStatus(phone,botId),HttpStatus.OK);
	}*/
	
	
	@GetMapping("/getAppointmentStatus")
	@ApiOperation("Summary : Api to get the status of an appointment via  Dhan ID. || "
			+ "  Description: Api to get the status of an appointment via  Dhan ID. (Used in crm) ||"
			+ "  Params : DhanId * || "
			+ "  Developer : @Dheeraj  ")
	ResponseEntity<List<AppointmetStatusData>> getAppointmentStatusList(@Valid @RequestParam("dhanId") @NotEmpty(message = "Dhanvantari Id should not be empty.") String dhanId){
		List<AppointmetStatusData> resultList = service.getAppointmentStatus(dhanId);
		return new ResponseEntity<List<AppointmetStatusData>>(resultList,HttpStatus.OK);
 	}
	
	@GetMapping("/getDhanPayUser")
	@ApiOperation("Summary : Api to get username via dhanvantariid. || "
			+ "  Description: Api to get dhanvantari username via dhanvantariid. (Used in crm) ||"
			+ "  Params : Dhan Id, User Id and type * || "
			+ "  Developer : @Dheeraj  ")
	ResponseEntity<String>  getDhanPayUsername(@RequestParam("dhanId") String dhanId,@RequestParam("userId") String userId,@RequestParam("type") String type){
		return new ResponseEntity<String>(service.getDhanPaymentUser(dhanId, userId, type),HttpStatus.OK);
	}
	
	@GetMapping("/createGenInternalList")
	@ApiOperation("Summary : Api to create internal list based in dhan id and list name. || "
			+ "  Description: Api to create internal list via dhan id and list name. (Used in crm) ||"
			+ "  Params : Dhan Id and listname * || "
			+ "  Developer : @Dheeraj  ")
	ResponseEntity<String> createInternalList(@RequestParam("dhanId") String dhanId,@RequestParam("listName") String listName){
		return new ResponseEntity<String>(service.addGenericInternalList(dhanId, listName),HttpStatus.OK);
	}
	
	@GetMapping("/getDisposition")
	@ApiOperation("Summary : Api to Get disposition via dhan Id and used Id. || "
			+ "  Description: Api to Get disposition via dhan Id and used Id. (Used by dialer vender) ||"
			+ "  Params : Dhan Id and User Id * || "
			+ "  Developer : @Dheeraj  ")
	ResponseEntity<ResponseMessage> getDhanDisposition(@RequestParam("dhanId") String dhanId,@RequestParam("userId") String userId){
		return new ResponseEntity<ResponseMessage>(service.getDispositionByUserId(dhanId, userId),HttpStatus.OK);
	}
	
	@GetMapping("/getDispostionBySession")
	@ApiOperation("Summary : Api to get disposition via session and used Id. || "
			+ "  Description: Api to get disposition via session and used Id. (Used by dialer vender) ||"
			+ "  Params : Session Id and User Id * || "
			+ "  Developer : @Dheeraj  ")
	ResponseEntity<ResponseMessage> getDhanDispostionBySession(@RequestParam("sessionId") String sessionId,@RequestParam("userId") String userId){
		return new ResponseEntity<ResponseMessage>(service.getDispositionBySessionId(sessionId, userId),HttpStatus.OK);
	}
	
	@GetMapping("/getOutboundDetails")
	@ApiOperation("Summary : Api to get Outbound details via date range. || "
			+ "  Description: Api to get Outbound details via date range. (Used by marketing team) ||"
			+ "  Params : Date range * || "
			+ "  Developer : @Dheeraj  ")
	ResponseEntity<ResponseMessage> getOutboundDetails(@Valid @RequestParam("fromDate") @NotEmpty(message = "From should not be empty.")  String fromDate,@Valid @RequestParam("toDate") @NotEmpty @NotBlank @NotNull(message = "To Date should not be empty.")  String toDate){
		return new ResponseEntity<ResponseMessage>(service.getOutboundDetails(fromDate, toDate),HttpStatus.OK);
	}
	
	@GetMapping("/getInboundDetails")
	@ApiOperation("Summary : Api to get inbound details via date range. || "
			+ "  Description: Api to get inbound details via date range. (Used by marketing team) ||"
			+ "  Params : Date range * || "
			+ "  Developer : @Dheeraj  ")
	ResponseEntity<ResponseMessage> getInboundDetails(@Valid@RequestParam("fromDate") @NotEmpty(message = "From should not be empty.")  String fromDate,@Valid @RequestParam("toDate") @NotEmpty @NotBlank @NotNull(message = "To Date should not be empty.")  String toDate){
		return new ResponseEntity<ResponseMessage>(service.getInboundDetails(fromDate, toDate),HttpStatus.OK);
	}
	
	@GetMapping("/getRddCityDetails")
	@ApiOperation("Summary : Api to get lead create date and relief status via dhan id. || "
			+ "  Description: Api to get lead create date and relief status via dhan id. (Used in crm) ||"
			+ "  Params : Dhan Id * || "
			+ "  Developer : @Dheeraj  ")
	ResponseEntity<List<Map<String, Object>>> getRddCityDetails(@Valid@RequestParam("dhanId") @NotEmpty(message = "Dhanvantariid should not be empty.")  String dhanId){
		return new ResponseEntity<List<Map<String, Object>>>(service.getRddCityData(dhanId),HttpStatus.OK);
	}
	
	@PostMapping("/createContact")
	@ApiOperation("Summary : Api to Create new contact via mobile numbe. || "
			+ "  Description: Api to Create new contact via mobile numbe. (Used in crm) ||"
			+ "  Params : Mobile No and name * || "
			+ "  Developer : @Dheeraj  ")
	String createNewContact(@RequestBody CreateContactDto contactDto){
		return service.createNewContact(contactDto);
	}
	

	@PostMapping("/saveCaseNotes")
	@ApiOperation("Summary : Api to Save notes in dhanvantari. || "
			+ "  Description: Api to Save notes in dhanvantari via CaseNotesDto Dto. (Used in crm) ||"
			+ "  Params : CaseNotesDto Dto * || "
			+ "  Developer : @Dheeraj  ")
	String saveCaseNotes(@RequestBody CaseNotesDto notesDto) {
		if(notesDto.getCaseId() == null || notesDto.getCaseId().length() == 0) {
			return "Case id is required";
		}else {
			return service.addCaseNotes(notesDto);
		}
	}
	
	@PostMapping("/moveClinicFreshCall")
	@ApiOperation("Summary : Api to Send fresh call to adroid. || "
			+ "  Description: Api toSend fresh call to adroid. (Used in crm) ||"
			+ "  Params : ClinicFreshCallDto Dto * || "
			+ "  Developer : @Dheeraj  ")
	public ResponseEntity<ResponseMessage> moveClinicFreshToAdroid(@Valid @RequestBody ClinicFreshCallDto callDto) {
		return new ResponseEntity<ResponseMessage>(service.saveClinicCallToAdroid(callDto),HttpStatus.OK);
	}
	
	@GetMapping("/getClosureDetails")
	@ApiOperation("Summary : Api to Get case closure reason and status. || "
			+ "  Description:Api to Get case closure reason and status via dhan Id (Used in crm) ||"
			+ "  Params : Dhan Id * || "
			+ "  Developer : @Dheeraj  ")
	ResponseEntity<List<CaseClosureDto>> getCaseClosureDetails(@RequestParam("dhanId") String dhanId){
		return new ResponseEntity<List<CaseClosureDto>>(service.getCaseClosureDetailsByDhanId(dhanId),HttpStatus.OK);
	}
	
}
