package com.jiva.app.reposistory;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.jiva.app.dtos.MvtResponseDto;

@Repository
public class EmsRepository {

	@Autowired
	@Qualifier("synchroyTemplate")
	private JdbcTemplate synchronyDbTemplate;
	
	public Page<?> programDocumentByCaseId_repo(Map<String,Object> reqParam, Pageable page) {
		 
		String sql="SELECT CASE_ID caseId,FILE_NAME_1 filename,CONCAT(PROGRAM_TYPE,'/',FILE_NAME_1) reportDesc,DATE_FORMAT(CREATE_DT,'%d %b %Y %h:%m') createDt"
				+ ",PROGRAM_TYPE programType FROM SCC_JIVA_FILE_LOADER_T WHERE "
				+ " PROGRAM_TYPE IS NOT NULL AND CASE_ID='"+reqParam.get("caseId")+ "' LIMIT " + page.getPageSize()+ " OFFSET " + page.getOffset();

		List<Map<String,Object>> responseDto=synchronyDbTemplate.queryForList(sql);
		     
		return new PageImpl<>(responseDto, page, programDocumentByCaseId_count(reqParam) );
	}
	
	public int programDocumentByCaseId_count(Map<String,Object> reqParam) {
		String sql="SELECT COUNT(FILE_ID) FROM SCC_JIVA_FILE_LOADER_T WHERE PROGRAM_TYPE IS NOT NULL AND CASE_ID='"+reqParam.get("caseId")+"'";
		
		return synchronyDbTemplate.queryForObject(sql, Integer.class);
	}
	
}
