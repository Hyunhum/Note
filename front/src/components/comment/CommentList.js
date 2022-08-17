import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import '../navbar/Link.css'
import { Pagination } from '../pagination/Pagination';
import { NoteSingle } from '../../pages/note/NoteSingle';
import { CommentDelete } from './CommentDelete';
import styled from "styled-components";

  const CommentUl = styled.ul`
  float: center;
  list-style: none;
  margin: 0px;
  padding: 0px;
  margin: 0 0 0 29%;
  padding: 0;
  `;
  const CommentLi = styled.li`
  top: 40%;
  display: flex;
  flex-wrap: wrap;
  word-break: break-all;
  font-size: 13px;
  font-weight: 600;
  width: 58%;
  height: 100%;
  text-align: left;
  border: 1px solid rgba(145, 144, 148, 0.3);
  padding: 5px;  
  `;
  const Button = styled.li`
  display: flex;
  flex-wrap: wrap;
  word-break: break-all;
  font-size: 12px;
  font-weight: 600;
  width: 58%;
  height: 100%;
  text-align: left;
  padding: 5px;  
  align: center;
  `;


export function CommentList(props) {

  return (
    <div>
      <CommentUl>
      {props.comments.map(comment => (
          <CommentLi key = {comment.commentId}>
            {comment.content}<br></br>
            {`작성자: ${comment.userWalletAddress}`}
            <Button>
            <Link to = {`comment/${comment.commentId}/update`}  state = {{ comment: comment }} className="subnav_link">
            <button type="button">
               수정하기
            </button></Link>
            <CommentDelete commentId = {comment.commentId} />
            </Button>
            </CommentLi>     
      ))}
      </CommentUl>
    </div>
    )
}