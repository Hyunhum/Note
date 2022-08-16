package com.blockchain.note.dto;

import javax.validation.constraints.NotBlank;

import lombok.Getter;

import com.blockchain.note.dao.entity.Comment;

import java.util.List;

@Getter
public class CommentResponseDto {

    @NotBlank
    private long commentId;

    @NotBlank
    private String content;

    @NotBlank
    private String userWalletAddress;

    public CommentResponseDto(long commentId, String content, String userWalletAddress) {
        this.commentId = commentId;
        this.content = content;
        this.userWalletAddress = userWalletAddress;
    }

    public static CommentResponseDto from(Comment comment) {
        return new CommentResponseDto(
            comment.getCommentId(),
            comment.getContent(),
            comment.getUserWalletAddress()
            );
    }
    
}
