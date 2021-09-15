package com.example.backend.service.collectionservice;

import com.example.backend.domian.user.User;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface CollectionService {


    void uploadImage(MultipartFile[] imageFile, User name) throws IOException;

}
