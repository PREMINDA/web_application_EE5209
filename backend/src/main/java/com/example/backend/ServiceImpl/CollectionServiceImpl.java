package com.example.backend.ServiceImpl;

import com.example.backend.domian.collection.Collection;
import com.example.backend.domian.user.User;
import com.example.backend.repository.CollectionRepository;
import com.example.backend.service.collectionservice.CollectionService;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Date;

@Service
@Transactional
public class CollectionServiceImpl implements CollectionService {

    private CollectionRepository collectionRepository;

    @Autowired
    public CollectionServiceImpl(CollectionRepository collectionRepository) {
        this.collectionRepository = collectionRepository;
    }

    public void uploadImage(MultipartFile[] imageFile, Collection game) throws IOException {
        String configFilePath = new File(System.getProperty("user.dir")).getParent()+"/frontend";
        String saveLocation = String.format("/src/images/%s",game.getGameName());
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

    public void uploadGame(MultipartFile[] imageFile, Collection game,MultipartFile logo) throws IOException{
        Collection collection = new Collection();
        collection.setGameId(generateUserId());
        collection.setGameName(game.getGameName());
        collection.setPrice(game.getPrice());
        collection.setDescription(game.getDescription());
        collection.setStoryLine(game.getStoryLine());
        collection.setRating(game.getRating());
        collection.setAvailability(game.getAvailability());
        collection.setUploadDate(new Date());
        collection.setDeveloperInformation(game.getDeveloperInformation());
        collection.setSystemRequirements(game.getSystemRequirements());
        collection.setImagePaths(makePathList(imageFile, game.getGameName()));
        collection.setCategory(game.getCategory());
        collection.setLogoPath(getLogoPath(logo,game.getGameName()));

        collectionRepository.save(collection);

    };

    private String generateUserId() {
        return RandomStringUtils.randomNumeric(10);
    }

    private String[] makePathList (MultipartFile[] imageFile,String gameName) throws IOException {

        if(imageFile.length>0)
        {
            ArrayList<String> pathList = new ArrayList<>();
            String configFilePath = new File(System.getProperty("user.dir")).getParent()+"/frontend";
            String saveLocation = String.format("/src/images/%s",gameName);
            new File(configFilePath+saveLocation).mkdirs();
            int i = 1;

            for (MultipartFile mp : imageFile)
            {
                byte[] bytes = mp.getBytes();
                Path path = Paths.get(configFilePath+saveLocation+"/"+i+".jpg");
                pathList.add(saveLocation+"/");
                Files.write(path,bytes);
                i++;
            }
            String[] pathArr = new String[pathList.size()];
            pathArr = pathList.toArray(pathArr);
            return pathArr;
        }
        return null;
    }
    private String getLogoPath (MultipartFile logo,String gameName) throws IOException {

        if(!logo.isEmpty())
        {
            String configFilePath = new File(System.getProperty("user.dir")).getParent()+"/frontend";
            String saveLocation = String.format("/src/images/%s",gameName);
            byte[] bytes = logo.getBytes();
            Path path = Paths.get(configFilePath+saveLocation+"/"+"logo"+".png");
            Files.write(path,bytes);
            return saveLocation;
        }
        return null;
    }

}
