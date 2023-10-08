package com.jiva.app.service;

import com.jiva.app.dtos.WhatsappResponse;

public interface WhatsappService {

	public WhatsappResponse sendWhatsappText(String phone,String mText);

	WhatsappResponse sendWhatsappImageText(String phone, String mText, String mediaUrl);

	WhatsappResponse sendWhatsappDocument(String phone, String mText, String filePath, String filename);
}
