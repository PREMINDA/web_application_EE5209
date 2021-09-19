package com.example.backend.controller;


import com.example.backend.domian.HttpResponse;
import com.example.backend.domian.collection.Game;
import com.example.backend.service.gameservice.GameService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Locale;

@RestController
@RequestMapping(path = {"/collection"})
public class GameController {

    GameService gameService;

    @Autowired
    public GameController(GameService collectionService){
        this.gameService = collectionService;
    }

    @PostMapping("/asd")
    public void imageUpload(@RequestParam("image") MultipartFile[] image,@RequestParam("name") String data) throws IOException {
        System.out.println(image);
        Game gameDetail = new ObjectMapper().readValue(data, Game.class);
        gameService.uploadImage(image,gameDetail);
    }
    @PostMapping("/upload")
    public void gameUpload(@RequestParam(value = "image",required = false) MultipartFile[] image,@RequestParam("name") String data,@RequestParam(value = "logo",required = false) MultipartFile logo) throws IOException {
        System.out.println(logo.getSize());
        Game gameDetail = new ObjectMapper().readValue(data, Game.class);
        gameService.gameUpload(image,gameDetail,logo);
    }

    @PostMapping("/add")
    public ResponseEntity<Game> uploadGame(@RequestBody Game coll) throws IOException {
         Game newGame = gameService.uploadGame(coll);
        return new ResponseEntity<Game>(newGame, HttpStatus.OK);
    }

    @GetMapping("/list")
    public ResponseEntity<List<Game>> getAllUser(){
        List<Game> gameList = gameService.getGameList();
        return new ResponseEntity<>(gameList,HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<HttpResponse> deleteGame(@PathVariable("id") long id){

        gameService.deleteGame(id);
        return response(HttpStatus.NO_CONTENT,"User Deleted successfully");
    }

    private ResponseEntity<HttpResponse> response(HttpStatus httpStatus, String message) {
        return new ResponseEntity<>(new HttpResponse(httpStatus.value(),httpStatus,httpStatus.getReasonPhrase().toUpperCase(),message.toUpperCase(Locale.ROOT)),httpStatus);
    }

}
