package com.example.backend.domian.collection;

import javax.persistence.*;

@Entity
public class Collection {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false,updatable = false)
    private Long id;
    private String gameId;
    private String gameName;
    private String description;
    @Column(columnDefinition = "TEXT")
    private String storyLine;
    private String[] systemRequirements;
    private String[] developerInformation;
    private String price;
    private String[] imagePaths;
    private String logoPath;
    private Boolean availability;
    private Integer rating;
    private String[] category;

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

    public String[] getImagePaths() {
        return imagePaths;
    }

    public void setImagePaths(String[] imagePaths) {
        this.imagePaths = imagePaths;
    }

    public String getLogoPath() {
        return logoPath;
    }

    public void setLogoPath(String logoPath) {
        this.logoPath = logoPath;
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

    public Collection(Long id,
                      String gameId,
                      String gameName,
                      String description,
                      String storyLine,
                      String[] systemRequirements,
                      String[] developerInformation,
                      String price,
                      String[] imagePaths,
                      String logoPath,
                      Boolean availability,
                      Integer rating,
                      String[] category) {
        this.id = id;
        this.gameId = gameId;
        this.gameName = gameName;
        this.description = description;
        this.storyLine = storyLine;
        this.systemRequirements = systemRequirements;
        this.developerInformation = developerInformation;
        this.price = price;
        this.imagePaths = imagePaths;
        this.logoPath = logoPath;
        this.availability = availability;
        this.rating = rating;
        this.category = category;



    }
}
