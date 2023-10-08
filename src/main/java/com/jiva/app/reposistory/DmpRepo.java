package com.jiva.app.reposistory;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class DmpRepo {

	@Autowired
	@Qualifier("synchroyTemplate")
	private JdbcTemplate synchronyDbTemplate;
	
	public int updateTokenAlert(Map<String,Object> reqParam) {
		String sql="UPDATE SCC_JIVA_DMP_DOCTOR_T SET SENT_TOKEN='"+reqParam.get("token")+"', SENT_YN=1,SENT_DT=NOW() WHERE CASE_ID='"+reqParam.get("caseId")+"'";
		
		return synchronyDbTemplate.update(sql);
	}
}
