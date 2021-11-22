package com.example.backend.controller;


import com.example.backend.domian.HttpResponse;
import com.example.backend.domian.collection.Game;
import com.example.backend.domian.comment.Comment.Comment;
import com.example.backend.dto.CommentDTO;
import com.example.backend.dto.GameDTO;
import com.example.backend.service.GameService;
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

    @PostMapping("/add")
    public ResponseEntity<Game> uploadGame(@RequestBody Game coll) throws IOException {
         Game newGame = gameService.uploadGame(coll);
        return new ResponseEntity<Game>(newGame, HttpStatus.OK);
    }

    @PostMapping("/addcomment/{id}")
    public ResponseEntity<Comment> uploadGame(@PathVariable long id,@RequestBody Comment comment) throws IOException {
        System.out.println(comment);
        Comment comment1 = gameService.addComment(id,comment);
        return new ResponseEntity<Comment>(comment1, HttpStatus.OK);
    }

    @PutMapping("/addimage/{id}")
    public ResponseEntity<HttpResponse> uploadImage(@PathVariable("id") long id,@RequestParam(value = "images",required = false) MultipartFile[] images) throws IOException {

        gameService.uploadImageGallery(id,images);
        return response(HttpStatus.NO_CONTENT,"Gallery Added successfully");
    }

    @PutMapping("/addlogo/{id}")
    public ResponseEntity<HttpResponse> uploadLogo(@PathVariable("id") long id,@RequestParam(value = "images",required = false) MultipartFile images) throws IOException {

        gameService.uploadLogo(id,images);
        return response(HttpStatus.NO_CONTENT,"Logo Added successfully");
    }


    @GetMapping("/list")
    public ResponseEntity<List<GameDTO>> getAllGames(){
        List<GameDTO> gameList = gameService.getGameList();
        return new ResponseEntity<>(gameList,HttpStatus.OK);
    }

    @GetMapping("/comment/{id}")
    public ResponseEntity<List<CommentDTO>> getComments(@PathVariable("id") long id){
        List<CommentDTO> comments = gameService.getComment(id);
        return new ResponseEntity<>(comments,HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Game> getGame(@PathVariable("id") long id){
        Game game = gameService.getSelectGame(id);
        return new ResponseEntity<>(game,HttpStatus.OK);
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
