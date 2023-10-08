package com.jiva.app.dtos;

import java.io.Serializable;

public class CaseClosureDto implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private String dhanId;
	private String closreStatus;
	private String closureReason;
	private String closureDate;
	public String getDhanId() {
		return dhanId;
	}
	public void setDhanId(String dhanId) {
		this.dhanId = dhanId;
	}
	public String getClosreStatus() {
		return closreStatus;
	}
	public void setClosreStatus(String closreStatus) {
		this.closreStatus = closreStatus;
	}
	public String getClosureReason() {
		return closureReason;
	}
	public void setClosureReason(String closureReason) {
		this.closureReason = closureReason;
	}
	public String getClosureDate() {
		return closureDate;
	}
	public void setClosureDate(String closureDate) {
		this.closureDate = closureDate;
	}
	@Override
	public String toString() {
		return "CaseClosureDto [dhanId=" + dhanId + ", closreStatus=" + closreStatus + ", closureReason="
				+ closureReason + ", closureDate=" + closureDate + "]";
	}
	
	

}
