package com.jiva.app.reposistory;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class ReportingRepo {

	@Autowired
	@Qualifier("jivaTemplate")
	private JdbcTemplate jivaTemplate;
	
	@Autowired
	private GlobalRepo globalRepo;
	
	public String updateRddListComment(Map<String,Object> reqParam) {
		int count=0;
		String responseMsg="";
		String fieldPrefix="";
		String comment_fd="comment",comment_idfd="comment_id",comment_namefd="comment_name",comment_dtfd="comment_dt";
		String commentType=String.valueOf(reqParam.get("commentType"));
		
		if(commentType.equalsIgnoreCase("am")) {
			fieldPrefix="am_";
		}else if(commentType.equalsIgnoreCase("sd")) {
			fieldPrefix="sd_";
		}
		
		comment_fd=fieldPrefix+comment_fd;
		comment_idfd=fieldPrefix+comment_idfd;
		comment_namefd=fieldPrefix+comment_namefd;
		comment_dtfd=fieldPrefix+comment_dtfd;
		
		String sql="SELECT COUNT(*) FROM rdd_call_list WHERE id="+reqParam.get("row_id")+" AND "+comment_idfd+"!=''";
		count=jivaTemplate.queryForObject(sql, Integer.class);
		
		if(count==0) {
			Map<String,Object> crmUserInfo=globalRepo.getCrmUserInfoByUserId(String.valueOf(reqParam.get("userId")));
			
			String crmId=String.valueOf(crmUserInfo.get("id"));
			String fullname=String.valueOf(crmUserInfo.get("fullname"));
			
			if(!crmId.equals("") && !crmId.equals("null")) {
				sql="UPDATE rdd_call_list SET "+comment_fd+"='"+reqParam.get("comment")+"', "+comment_idfd+"='"+crmId+"', "
						+ ""+comment_namefd+"='"+fullname+"', "+comment_dtfd+"=NOW() WHERE id="+reqParam.get("row_id");
				jivaTemplate.update(sql);
				System.out.println(sql);
				responseMsg="Record Updated";
			}else {
				responseMsg="CrmId not found";
			}
		}else {
			responseMsg="Comment already added.";
		}
		return responseMsg;
	}
	
	public String updateCourtesyListComment(Map<String,Object> reqParam) {
		int count=0;
		String responseMsg="";
		String fieldPrefix="";
		String comment_fd="comment",comment_idfd="comment_id",comment_namefd="comment_name",comment_dtfd="comment_dt";
		String commentType=String.valueOf(reqParam.get("commentType"));
		
		if(commentType.equalsIgnoreCase("am")) {
			fieldPrefix="am_";
		}else if(commentType.equalsIgnoreCase("sd")) {
			fieldPrefix="sd_";
		}
		
		comment_fd=fieldPrefix+comment_fd;
		comment_idfd=fieldPrefix+comment_idfd;
		comment_namefd=fieldPrefix+comment_namefd;
		comment_dtfd=fieldPrefix+comment_dtfd;
		
		String sql="SELECT COUNT(*) FROM courtesy_call_list WHERE id="+reqParam.get("row_id")+" AND "+comment_idfd+"!=''";
		count=jivaTemplate.queryForObject(sql, Integer.class);
		
		if(count==0) {
			Map<String,Object> crmUserInfo=globalRepo.getCrmUserInfoByUserId(String.valueOf(reqParam.get("userId")));
			
			String crmId=String.valueOf(crmUserInfo.get("id"));
			String fullname=String.valueOf(crmUserInfo.get("fullname"));
			
			if(!crmId.equals("") && !crmId.equals("null")) {
				
				sql="UPDATE courtesy_call_list SET "+comment_fd+"='"+reqParam.get("comment")+"', "+comment_idfd+"='"+crmId+"', "
						+ ""+comment_namefd+"='"+fullname+"', "+comment_dtfd+"=NOW() WHERE id="+reqParam.get("row_id");
				
				jivaTemplate.update(sql);
				
				responseMsg="Record Updated";
			}else {
				responseMsg="CrmId not found";
			}
		}else {
			responseMsg="Comment already added.";
		}
		return responseMsg;
	}
	
}
