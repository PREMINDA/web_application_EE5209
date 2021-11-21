package com.example.backend.dto;

import com.example.backend.domian.comment.Comment.Comment;

import javax.persistence.Column;

public class CommentDTO {


    private String name;
    private String comment;
    private Double rating;

    public CommentDTO() {
    }

    public CommentDTO(Comment comment) {
        this.name = comment.getName();
        this.comment = comment.getComment();
        this.rating = comment.getRating();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public Double getRating() {
        return rating;
    }

    public void setRating(Double rating) {
        this.rating = rating;
    }
}
