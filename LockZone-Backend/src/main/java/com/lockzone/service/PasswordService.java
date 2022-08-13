package com.lockzone.service;

import java.security.SecureRandom;
import java.util.Random;

import org.springframework.stereotype.Service;

/*
 * 
 * This class is used to generate randomized passwords in three separate ways
 *		1. By generating a random string that is 15 characters long
 *		2. By taking a string provided by the user, and randomly changing characters in the string 
 *		3. By taking a string provided by the user, and changing certain characters into other character that look similar
 *			- Example: 'E' will be changed to '3'
 *			- This last method is more for fun than anything else, but is still an option for the user
 * This class utilizes SecureRandom and Random to produce the randomized passwords
 * */

@Service	
public final class PasswordService {
	
	private static final int RANDOM_GEN_PASSWORD_SIZE = 15;
	private static final char [] SPECIAL_CHARACTERS = {'!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '?', '<', '>'};
	private static final Random RAND = new SecureRandom();
	
	private PasswordService() {}
	
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	/* These methods will return a randomized character depending on which one is called */
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	private static char returnLetter() { // This method will return either an upper case or lower case letter
		if(RAND.nextBoolean()) {
			return (char)('A' + RAND.nextInt(26));
		} else
			return (char)('a' + RAND.nextInt(26));
	}
	
	private static char returnNumber() { // This method will return return a number
		return (char)('0' + RAND.nextInt(10));
	}
	
	private static char returnSpecialCharacter() { // This method will return a special character that is in the SPECIAL_CHARACTERS array
		return SPECIAL_CHARACTERS[RAND.nextInt(17)];
	}
	
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	/* 
	 * This method will take a string from the user and filter out: 
	 * 		- white spaces in the string 
	 * 		- any character that are not allowed 
	 * Also it will lower casing any Alphabetical characters and trim the string 
	 * 
	 * */
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	private static String stringSanitizer(String word) { 
		StringBuilder sb = new StringBuilder(word.trim());
		for(int i = 0; i < sb.length(); i++) {
			// Here, the method is lower casing any alphabetical characters that are upper case
			if(Character.isUpperCase(sb.charAt(i))) { 
				sb.setCharAt(i, Character.toLowerCase(sb.charAt(i)));
			}
			// Here, the method will remove any white spaces that appear in the sting, as well as any characters that are not allowed
			if(sb.charAt(i) == ' ' || sb.charAt(i) == '.' || sb.charAt(i) == ',' || sb.charAt(i) == '\'' || sb.charAt(i) == '\"') {
				sb.deleteCharAt(i);
				i--;
			}
		}
		return sb.toString();
	}
	
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	/* These methods will return randomize passwords */
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	// This method will produce a randomized string 15 characters in length
	public static String randomizedPasswordGenerator() {
		StringBuilder sb = new StringBuilder();
		// Here, the method uses a random number to call one of the character returning methods found towards the top of the class
		for(int i = 0; i < RANDOM_GEN_PASSWORD_SIZE; i++) {
			switch(RAND.nextInt(3)) {
			case 0:
				sb.append(returnLetter());
				break;
			case 1:
				sb.append(returnNumber());
				break;
			case 2:
				sb.append(returnSpecialCharacter());
				break;
			default:
				break;
			}
		}		
		return sb.toString();
	}
	
	/*
	 * 
	 * This method takes in a string from the user and uses it as a seed to generate a new randomized password
	 * It does this by shuffling the characters and then randomly replacing characters
	 * 
	 * */
	public static String passwordShuffler(String seed) {
		StringBuilder sb = new StringBuilder(stringSanitizer(seed));
		// Here, the method will randomly shuffle the string
		for(int i = 0; i < sb.length(); i++) {
			char temp;
			int num = RAND.nextInt(sb.length());
			if(num != i) {
				temp = sb.charAt(i);
				sb.setCharAt(i, sb.charAt(num));
				sb.setCharAt(num, temp);				
			}
		}	
		// Here, the method will randomly replace a character with another character at the specified index
		for(int j = 0; j < sb.length(); j++) {
			if(RAND.nextBoolean()) { 
				switch(RAND.nextInt(3)) {
				case 0:
					sb.setCharAt(j, returnLetter());
					break;
				case 1:
					sb.setCharAt(j, returnNumber());
					break;
				case 2:
					sb.setCharAt(j, returnSpecialCharacter());
					break;
				default:
					break;
				}	
			}
			// Here, the method will randomly upper case or lower case a character if it is alphabetical
			if(RAND.nextBoolean()) {
				if(Character.isUpperCase(sb.charAt(j))) {
					sb.setCharAt(j, Character.toLowerCase(sb.charAt(j)));
				} else if(Character.isLowerCase(sb.charAt(j))) {
					sb.setCharAt(j, Character.toUpperCase(sb.charAt(j)));
				}
			}
		}
		return sb.toString();
	}
	
	/*
	 * 
	 * This method will replace certain character with characters that look similar to it 
	 * The string is provided by the user
	 * This method is mostly for fun, but is still an option for the user
	 * 
	 * */	
	public static String l33tPasswords(String seed) {
		StringBuilder sb = new StringBuilder(stringSanitizer(seed.trim()));
		// Here, the method will iterate through the string and replace characters with the switch statement
		for(int i = 0; i < sb.length(); i++) {
			if(RAND.nextBoolean()) {
				switch(sb.charAt(i)) {
				case '0':
					sb.setCharAt(i, 'o');
					break;
				case '1':
					switch(RAND.nextInt(3)) {
					case 1:
						sb.setCharAt(i, 'l');
						break;
					case 2:
						sb.setCharAt(i, 'I');
						break;
					default:
						break;
					}
					break;
				case '2':
					sb.setCharAt(i, 'z');
					break;
				case '3':
					sb.setCharAt(i, 'E');
					break;
				case '4':
					sb.setCharAt(i, 'A');
					break;
				case '5':
					sb.setCharAt(i, 'S');
					break;
				case '6':
					sb.setCharAt(i, 'G');
					break;
				case '7':
					sb.setCharAt(i, 'T');
					break;
				case '8':
					sb.setCharAt(i, 'B');
					break;
				case '9':
					sb.setCharAt(i, 'P');
					break;
				case 'a':
					switch(RAND.nextInt(3)) {
					case 1:
						sb.setCharAt(i, '@');
						break;
					case 2:
						sb.setCharAt(i, '4');
						break;
					default:
						break;
					}
					break;
				case 'b':
					sb.setCharAt(i, '6');
					break;
				case 'c':
					sb.setCharAt(i, '(');
					break;
				case 'e':
					sb.setCharAt(i, '3');
					break;
				case 'g':
				case 'q':
					sb.setCharAt(i, '9');
					break;
				case 'h':
					sb.setCharAt(i, '#');
					break;
				case 'i':
				case 'l':
					switch(RAND.nextInt(3)) {
					case 1:
						sb.setCharAt(i, '1');
						break;
					case 2:
						sb.setCharAt(i, '!');
						break;
					default:
						break;
					}
					break;
				case 'o':
					sb.setCharAt(i, '0');
					break;
				case 's':
					sb.setCharAt(i, '$');
					break;
				case 't':
					sb.setCharAt(i, '7');
					break;
				case 'v':
					sb.setCharAt(i, '^');
					break;
				case 'x':
					sb.setCharAt(i, '%');
					break;
				case 'z':
					sb.setCharAt(i, '2');
					break;
				case '@':
					sb.setCharAt(i, 'a');
					break;
				case '$':
					sb.setCharAt(i, 's');
					break;
				case '!':
					switch(RAND.nextInt(3)) {
					case 1:
						sb.setCharAt(i, '1');
						break;
					case 2:
						sb.setCharAt(i, 'i');
						break;
					default:
						break;
					}
					break;
				case '#':
					sb.setCharAt(i, 'h');
					break;
				case '%':
					sb.setCharAt(i, 'x');
					break;
				case '^':
					sb.setCharAt(i, 'v');
					break;
				case '(':
					sb.setCharAt(i, 'c');
					break;
				case ')':
					sb.setCharAt(i, '>');
					break;
				case '>':
					sb.setCharAt(i, ')');
					break;					
				default:
					break;
				}
			}
			// Here, the method will randomly upper case or lower case a character if it is alphabetical
			if(RAND.nextBoolean()) {
				if(Character.isUpperCase(sb.charAt(i))) {
					sb.setCharAt(i, Character.toLowerCase(sb.charAt(i)));
				} else if(Character.isLowerCase(sb.charAt(i))) {
					sb.setCharAt(i, Character.toUpperCase(sb.charAt(i)));
				}
			}
		}
		return sb.toString();
	}
	
}
