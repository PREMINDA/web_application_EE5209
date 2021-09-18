package com.example.backend.controller;


import com.example.backend.domian.collection.Collection;
import com.example.backend.domian.user.User;
import com.example.backend.service.collectionservice.CollectionService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

    @PostMapping("/asd")
    public void imageUpload(@RequestParam("image") MultipartFile[] image,@RequestParam("name") String data) throws IOException {
        System.out.println(image);
        Collection gameDetail = new ObjectMapper().readValue(data, Collection.class);
        collectionService.uploadImage(image,gameDetail);
    }
    @PostMapping("/upload")
    public void gameUpload(@RequestParam(value = "image",required = false) MultipartFile[] image,@RequestParam("name") String data,@RequestParam(value = "logo",required = false) MultipartFile logo) throws IOException {
        System.out.println(logo.getSize());
        Collection gameDetail = new ObjectMapper().readValue(data, Collection.class);
        collectionService.gameUpload(image,gameDetail,logo);
    }

    @PostMapping("/add")
    public ResponseEntity<Collection> uploadGame(@RequestBody Collection coll) throws IOException {
         Collection newGame = collectionService.uploadGame(coll);
        return new ResponseEntity<Collection>(newGame, HttpStatus.OK);
    }

}
