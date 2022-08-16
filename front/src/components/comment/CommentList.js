import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import '../navbar/Link.css'
import { Pagination } from '../pagination/Pagination';
import { NoteSingle } from '../../pages/NoteSingle';
import { CommentDelete } from './CommentDelete';
import styled from "styled-components";

const CommentUl = styled.ul`
  float: center;
  list-style: none;
  margin: 0px;
  padding: 0px;
  width: 80%;
  margin: 0 0 0 10%;
  padding: 0;
`;

const CommentLi = styled.li`

  top: 40%;
  display: inline-block;
  font-size: 13px;
  font-weight: 600;
  width: 60%;
  height: 35px;
  border-radius: 5px;
  background-color: #f4f3ee;
  border-top: 1px solid rgba(145, 144, 148, 0.3);
  border-bottom: 1px solid rgba(145, 144, 148, 0.3);
  &:hover {
    cursor: pointer;
    color: white;
    background-color: #263a6c;
  }
  &:focus::after {
    color: white;
    background-color: #263a6c;
  }
`;



export function CommentList(props) {

  return (
    <div>
      <CommentUl>
      {props.comments.map(comment => (
          <CommentLi key = {comment.commentId}>
            {comment.content}<br></br>
            {`작성자: ${comment.userWalletAddress}`}
            <Link to = {`comment/${comment.commentId}/update`}  state = {{ comment: comment }} className="subnav_link">
            <button type="button">
               수정하기
            </button></Link>
            <CommentDelete commentId = {comment.commentId} />
            </CommentLi>     
      ))}
      </CommentUl>
    </div>
    )
}