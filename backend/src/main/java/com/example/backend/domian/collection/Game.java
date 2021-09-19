package com.example.backend.domian.collection;

import javax.persistence.*;
import java.util.Date;
import java.io.Serializable;
import java.util.Arrays;

@Entity
public class Game implements Serializable {

    public Game(){
    }

    public Game(
                      String gameId,
                      String gameName,
                      String description,
                      String storyLine,
                      String[] systemRequirements,
                      String[] developerInformation,
                      String price,
                      String imagePaths,
                      Boolean availability,
                      Integer rating,
                      String[] category,
                      Date uploadDate,
                      Date releaseDate,
                      Integer stockCount) {

        this.gameId = gameId;
        this.gameName = gameName;
        this.description = description;
        this.storyLine = storyLine;
        this.systemRequirements = systemRequirements;
        this.developerInformation = developerInformation;
        this.price = price;
        this.imagePaths = imagePaths;
        this.availability = availability;
        this.rating = rating;
        this.category = category;
        this.uploadDate = uploadDate;
        this.releaseDate = releaseDate;
        this.stockCount = stockCount;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false,updatable = false)
    private Long id;
    private String gameId;
    private String gameName;

    @Lob
    @Column(columnDefinition = "TEXT")
    private String description;

    @Lob
    @Column(columnDefinition = "TEXT")
    private String storyLine;
    private String[] systemRequirements;
    private String[] developerInformation;
    private String price;
    private String imagePaths;//
    private Date uploadDate;
    private Date releaseDate;//
    private Boolean availability;
    private Integer rating;//
    private String[] category;
    private Integer stockCount;

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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
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

    public Date getUploadDate() {
        return uploadDate;
    }

    public void setUploadDate(Date uploadDate) {
        this.uploadDate = uploadDate;
    }

    public Date getReleaseDate() {
        return releaseDate;
    }

    public void setReleaseDate(Date releaseDate) {
        this.releaseDate = releaseDate;
    }

    public Integer getStockCount() {
        return stockCount;
    }

    public void setStockCount(Integer stockCount) {
        this.stockCount = stockCount;
    }

    @Override
    public String toString() {
        return "Game{" +
                "id=" + id +
                ", gameId='" + gameId + '\'' +
                ", gameName='" + gameName + '\'' +
                ", description='" + description + '\'' +
                ", storyLine='" + storyLine + '\'' +
                ", systemRequirements=" + Arrays.toString(systemRequirements) +
                ", developerInformation=" + Arrays.toString(developerInformation) +
                ", price='" + price + '\'' +
                ", imagePaths='" + imagePaths + '\'' +
                ", uploadDate=" + uploadDate +
                ", releaseDate=" + releaseDate +
                ", availability=" + availability +
                ", rating=" + rating +
                ", category=" + Arrays.toString(category) +
                ", stockCount=" + stockCount +
                '}';
    }
}


