package com.lockzone.service;

import java.security.InvalidAlgorithmParameterException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.security.spec.InvalidKeySpecException;
import java.security.spec.KeySpec;
import java.util.Base64;

import javax.crypto.BadPaddingException;
import javax.crypto.Cipher;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;
import javax.crypto.SecretKey;
import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.PBEKeySpec;
import javax.crypto.spec.SecretKeySpec;

import org.springframework.stereotype.Service;

// **** THIS IS THE KEY AND IV FOR THE ENCRYPTION ALGORITHM ****
//initFromStrings("PTgBIqwx2IU9VZIOhAsa35w22q41brIpJHTkLFU4aFc=", "fHcn9YBZWu89tA==");
@Service
public class AESService {
	
	private static SecretKey key;
	private static IvParameterSpec IV;
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// These methods where used to generate the SecretKey and IV but are not going to be used moving forward
	public static SecretKey getKeyFromPassword(String password, String salt) throws NoSuchAlgorithmException, InvalidKeySpecException {   
		SecretKeyFactory factory = SecretKeyFactory.getInstance("PBKDF2WithHmacSHA256");
		KeySpec spec = new PBEKeySpec(password.toCharArray(), salt.getBytes(), 65536, 256);
		SecretKey secret = new SecretKeySpec(factory.generateSecret(spec).getEncoded(), "AES");
		return secret;
	}

	public static IvParameterSpec generateIv() {
		byte[] iv = new byte[16];
		new SecureRandom().nextBytes(iv);
		return new IvParameterSpec(iv);
	}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// This method was used to get the string version of the SecretKey and IV, moving forward it will not be used
	public void exportKeys() throws NoSuchAlgorithmException, InvalidKeySpecException {
		key = getKeyFromPassword("root", "10");
		IV = generateIv();
		System.out.println("SecretKey : "+encode(key.getEncoded()));
		System.out.println("IV : "+encode(IV.getIV()));
	}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// This method is used to set the SecretKey and IV that have been generated
	public void initFromStrings(String secretKey, String IV) {
		this.key = new SecretKeySpec(decode(secretKey), "AES");
		this.IV = new IvParameterSpec(IV.getBytes());
	}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// These methods are the encryption and decryption algorithms
	public static String encrypt(String input) 
			throws NoSuchPaddingException, NoSuchAlgorithmException, InvalidAlgorithmParameterException, InvalidKeyException, BadPaddingException, 
			IllegalBlockSizeException {
		    
		Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
		cipher.init(Cipher.ENCRYPT_MODE, key, IV);
		byte[] cipherText = cipher.doFinal(input.getBytes());
		return Base64.getEncoder().encodeToString(cipherText);
	}
	
	public static String decrypt(String cipherText) 
			throws NoSuchPaddingException, NoSuchAlgorithmException, InvalidAlgorithmParameterException, InvalidKeyException,
		    BadPaddingException, IllegalBlockSizeException {
		    
		Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
		cipher.init(Cipher.DECRYPT_MODE, key, IV);
		byte[] plainText = cipher.doFinal(Base64.getDecoder().decode(cipherText));
		return new String(plainText);
	}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// This method will convert a byte array to a string
	private String encode(byte[] data) {
		return Base64.getEncoder().encodeToString(data);
	}
	// This method will convert a string to a byte array
	private byte[] decode(String data) {
		return Base64.getDecoder().decode(data);
	}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
}
