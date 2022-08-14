package com.lockzone;

import java.io.Serializable;
import java.security.GeneralSecurityException;
import java.security.Key;
import java.util.Base64;

import javax.crypto.Cipher;
import javax.crypto.spec.SecretKeySpec;
import javax.persistence.AttributeConverter;

import org.apache.commons.lang3.SerializationUtils;
import org.springframework.context.annotation.Configuration;

import com.lockzone.beans.Accounts;

@Configuration
public class AesEncryptor implements AttributeConverter<Object, String> {
	
	private final String encryptionKey = "PTgBIqwx2IU9VZIO";
	private final String encryptionCipher = "AES";
	
	private Key key;
	private Cipher cipher;
	
	private Key getKey() {
		if(key == null)
			key = new SecretKeySpec(encryptionKey.getBytes(), encryptionCipher);
		return key;
	}
	
	private Cipher getCipher() throws GeneralSecurityException{
		if(cipher == null)
			cipher = Cipher.getInstance(encryptionCipher);
		return cipher;
	}
	
	private void initCipher(int encryptMode) throws GeneralSecurityException {
		getCipher().init(encryptMode, getKey());
	}
	
	@Override
	public String convertToDatabaseColumn(Object attribute) {
		String word = "";
		if(attribute == null)
			return null;
		try {
			initCipher(Cipher.ENCRYPT_MODE);
			byte[] bytes = SerializationUtils.serialize((Serializable) attribute);
			word = Base64.getEncoder().encodeToString(getCipher().doFinal(bytes));
		} catch (GeneralSecurityException e) {
			e.printStackTrace();
		}
		return word;
	}

	@Override
	public Object convertToEntityAttribute(String dbData) {
		byte[] bytes = null;
		if (dbData == null)
			return null;
		try {
			initCipher(Cipher.DECRYPT_MODE);
			bytes = getCipher().doFinal(Base64.getDecoder().decode(dbData));
		} catch (GeneralSecurityException e) {
			e.printStackTrace();
		}
		
		return SerializationUtils.deserialize(bytes);
	}
	
}







