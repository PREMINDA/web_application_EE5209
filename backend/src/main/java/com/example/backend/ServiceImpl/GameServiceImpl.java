package com.example.backend.ServiceImpl;

import com.example.backend.domian.collection.Game;
import com.example.backend.repository.GameRepository;
import com.example.backend.service.gameservice.GameService;
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
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class GameServiceImpl implements GameService {

    private GameRepository gamesRepository;

    @Autowired
    public GameServiceImpl(GameRepository collectionRepository) {
        this.gamesRepository = collectionRepository;
    }

    public void uploadImage(MultipartFile[] imageFile, Game game) throws IOException {
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

    public void gameUpload(MultipartFile[] imageFile, Game game, MultipartFile logo) throws IOException{
        Game collection = new Game();
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
        collection.setImagePaths(setImages(imageFile, game.getGameName()));
        collection.setCategory(game.getCategory());
        setLogo(logo,game.getGameName());
       collection.setReleaseDate(new Date(2021,1,1));
        gamesRepository.save(collection);

    };

    public Game uploadGame(Game coll){
        Game newGame = new Game();
        newGame.setGameId(generateUserId());
        newGame.setGameName(coll.getGameName());
        newGame.setAvailability(coll.getAvailability());
        newGame.setUploadDate(new Date());
        newGame.setPrice(coll.getPrice());
        newGame.setCategory(coll.getCategory());
        newGame.setAvailability(true);
        newGame.setSystemRequirements(coll.getSystemRequirements());
        newGame.setReleaseDate(coll.getReleaseDate());
        newGame.setDeveloperInformation(coll.getDeveloperInformation());
        newGame.setStoryLine(coll.getStoryLine());
        newGame.setDescription(coll.getDescription());
        newGame.setRating(0);
        newGame.setStockCount(coll.getStockCount());
        gamesRepository.save(newGame);
        return newGame;
    }

    public List<Game> getGameList()
    {
        List<Game> games = gamesRepository.findAll();
        return games;
    }

    public void deleteGame(Long id)
    {
        gamesRepository.deleteById(id);
    }

    public void uploadImageGallery(Long id,MultipartFile[] images) throws IOException
    {

           Game game = gamesRepository.findById(id).get();
           String path = setImages(images,game.getGameName());
           game.setImagePaths(path);
           gamesRepository.save(game);
           System.out.println(game);
    }

    public Game getSelectGame (Long id)
    {
        return gamesRepository.findById(id).get();
    }

    private String generateUserId() {
        return RandomStringUtils.randomNumeric(10);
    }

    private String setImages(MultipartFile[] images, String gameName) throws IOException
    {

        if(images.length>0)
        {

            String configFilePath = new File(System.getProperty("user.dir")).getParent()+"/frontend";
            String saveLocation = String.format("/src/images/%s",gameName);
            new File(configFilePath+saveLocation).mkdirs();
            int i = 1;
            for (MultipartFile mp : images)
            {
                byte[] bytes = mp.getBytes();
                Path path = Paths.get(configFilePath+saveLocation+"/"+i+".jpg");
                Files.write(path,bytes);
                i++;
            }
            return saveLocation;
        }
        return null;
    }
    private void setLogo (MultipartFile logo,String gameName) throws IOException
    {

        if(!logo.isEmpty())
        {
            String configFilePath = new File(System.getProperty("user.dir")).getParent()+"/frontend";
            String saveLocation = String.format("/src/images/%s",gameName);
            byte[] bytes = logo.getBytes();
            Path path = Paths.get(configFilePath+saveLocation+"/"+"logo"+".png");
            Files.write(path,bytes);

        }

    }




}
