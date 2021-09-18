package com.example.backend.service.collectionservice;

import com.example.backend.domian.collection.Collection;
import com.example.backend.domian.user.User;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface CollectionService {


    void uploadImage(MultipartFile[] imageFile, Collection game) throws IOException;
    void gameUpload(MultipartFile[] imageFile, Collection game, MultipartFile logo) throws IOException;
    Collection uploadGame(Collection coll);

}
