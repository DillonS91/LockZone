package com.lockzone.client;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@ComponentScan("com.lockzone")
@Configuration
@EnableAutoConfiguration 
public class LockZoneBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(LockZoneBackendApplication.class, args);
	}

}
