package com.example.backend.service;

import com.example.backend.domian.collection.Game;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface GameService {


    Game uploadGame(Game coll);
    List<Game> getGameList();
    void deleteGame(Long id);
    void uploadImageGallery(Long id,MultipartFile[] images) throws IOException;
    void uploadLogo(Long id,MultipartFile images) throws IOException;
    Game getSelectGame (Long id);


}
