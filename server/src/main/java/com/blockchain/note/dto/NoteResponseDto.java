package com.blockchain.note.dto;

import javax.validation.constraints.NotBlank;

import lombok.Getter;

import com.blockchain.note.dao.entity.Note;

import java.util.List;
import java.util.stream.Collectors;

@Getter
public class NoteResponseDto {

    @NotBlank
    private long noteId;

    @NotBlank
    private String title;

    @NotBlank
    private String content;

    @NotBlank
    private String userWalletAddress;

    public NoteResponseDto(long noteId, String title, String content,
    String userWalletAddress) {
        this.noteId = noteId;
        this.title = title;
        this.content = content;
        this.userWalletAddress = userWalletAddress;
    }

    public static NoteResponseDto from(Note note) {
        return new NoteResponseDto(
            note.getNoteId(),
            note.getTitle(), 
            note.getContent(),
            note.getUserWalletAddress()/*,
            note.getComments().stream()
            .map(comment -> CommentResponseDto.from(comment))
            .collect(Collectors.toList())*/
            );
    }
    
}
