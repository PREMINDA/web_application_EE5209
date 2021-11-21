package com.example.backend.dto;

import com.example.backend.domian.collection.Game;
import com.example.backend.domian.comment.Comment.Comment;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class GameDTO {
    private Long id;
    private String gameId;
    private String gameName;
    private String storyLine;
    private String[] systemRequirements;
    private String[] developerInformation;
    private String price;
    private String imagePaths;//
    private Date releaseDate;//
    private Boolean availability;
    private Integer rating;//
    private String[] category;
    private Integer stockCount;


    public GameDTO(Game game) {
        this.id=game.getId();
        this.gameId=game.getGameId();
        this.gameName=game.getGameName();
        this.storyLine = game.getStoryLine();
        this.systemRequirements = game.getSystemRequirements();
        this.developerInformation = game.getDeveloperInformation();
        this.price = game.getPrice();
        this.imagePaths = game.getImagePaths();
        this.releaseDate = game.getReleaseDate();
        this.availability = game.getAvailability();
        this.rating = game.getRating();
        this.category = game.getCategory();
        this.stockCount = game.getStockCount();


    }

    public String getStoryLine() {
        return storyLine;
    }

    public void setStoryLine(String storyLine) {
        this.storyLine = storyLine;
    }

    public String[] getSystemRequirements() {
        return systemRequirements;
    }

    public void setSystemRequirements(String[] systemRequirements) {
        this.systemRequirements = systemRequirements;
    }

    public String[] getDeveloperInformation() {
        return developerInformation;
    }

    public void setDeveloperInformation(String[] developerInformation) {
        this.developerInformation = developerInformation;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getImagePaths() {
        return imagePaths;
    }

    public void setImagePaths(String imagePaths) {
        this.imagePaths = imagePaths;
    }


    public Date getReleaseDate() {
        return releaseDate;
    }

    public void setReleaseDate(Date releaseDate) {
        this.releaseDate = releaseDate;
    }

    public Boolean getAvailability() {
        return availability;
    }

    public void setAvailability(Boolean availability) {
        this.availability = availability;
    }

    public Integer getRating() {
        return rating;
    }

    public void setRating(Integer rating) {
        this.rating = rating;
    }

    public String[] getCategory() {
        return category;
    }

    public void setCategory(String[] category) {
        this.category = category;
    }

    public Integer getStockCount() {
        return stockCount;
    }

    public void setStockCount(Integer stockCount) {
        this.stockCount = stockCount;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getGameId() {
        return gameId;
    }

    public void setGameId(String gameId) {
        this.gameId = gameId;
    }

    public String getGameName() {
        return gameName;
    }

    public void setGameName(String gameName) {
        this.gameName = gameName;
    }
}
