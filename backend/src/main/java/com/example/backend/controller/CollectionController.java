package com.example.backend.controller;


import com.example.backend.domian.user.User;
import com.example.backend.service.collectionservice.CollectionService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.tomcat.util.json.JSONParser;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping(path = {"/collection"})
public class CollectionController {

    CollectionService collectionService;

    @Autowired
    public CollectionController(CollectionService collectionService){
        this.collectionService = collectionService;
    }

    @PostMapping("/")
    public void imageUpload(@RequestParam("image") MultipartFile[] image,@RequestParam("name") String name) throws IOException {
        System.out.println(name);
        User ronaldo = new ObjectMapper().readValue(name, User.class);
        collectionService.uploadImage(image,ronaldo);
    }

}
