package com.example.backend.service.gameservice;

import com.example.backend.domian.collection.Game;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface GameService {


    void uploadImage(MultipartFile[] imageFile, Game game) throws IOException;
    void gameUpload(MultipartFile[] imageFile, Game game, MultipartFile logo) throws IOException;
    Game uploadGame(Game coll);
    List<Game> getGameList();
    void deleteGame(Long id);

}
