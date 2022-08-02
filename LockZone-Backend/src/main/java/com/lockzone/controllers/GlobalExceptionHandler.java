package com.lockzone.controllers;

import java.util.Date;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;


@RestControllerAdvice
public class GlobalExceptionHandler {

	@ResponseStatus(code = HttpStatus.BAD_REQUEST)
	@ExceptionHandler(IllegalArgumentException.class)
	public ErrorReponse illegalArgument(Exception e) {
		return new ErrorReponse(e.getClass(), e.getMessage());
	}

	class ErrorReponse {
		private Class cause;
		private String message;
		private Date timestamp;

		public ErrorReponse() {
			super();
			this.timestamp = new Date();
		}

		public ErrorReponse(Class cause, String message) {
			this();
			this.cause = cause;
			this.message = message;
		}

		public Class getCause() {
			return cause;
		}

		public void setCause(Class cause) {
			this.cause = cause;
		}

		public String getMessage() {
			return message;
		}

		public void setMessage(String message) {
			this.message = message;
		}

		public Date getTimestamp() {
			return timestamp;
		}

		public void setTimestamp(Date timestamp) {
			this.timestamp = timestamp;
		}

	}
}