package com.example.backend;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.io.File;

@SpringBootTest
class BackendApplicationTests {

	@Test
	void contextLoads() {
		String configFilePath = new File(System.getProperty("user.dir")).getParent();
		System.out.println(configFilePath);
	}

}
