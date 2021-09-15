package com.example.backend.ServiceImpl;

import com.example.backend.domian.user.User;
import com.example.backend.service.collectionservice.CollectionService;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;

@Service
@Transactional
public class CollectionServiceImpl implements CollectionService {

    public void uploadImage(MultipartFile[] imageFile, User name) throws IOException {
        String configFilePath = new File(System.getProperty("user.dir")).getParent()+"/frontend";
        String saveLocation = String.format("/src/images/%s",name.getUsername());
        new File(configFilePath+saveLocation).mkdirs();
        int i = 1;
        ArrayList<String> asd = new ArrayList<>();
        for (MultipartFile mp : imageFile)
        {
            byte[] bytes = mp.getBytes();
            Path path = Paths.get(configFilePath+saveLocation+"/"+i+".jpg");
            asd.add(saveLocation+"/");
            Files.write(path,bytes);
            i++;
        }
        System.out.println(asd);

    }

}
