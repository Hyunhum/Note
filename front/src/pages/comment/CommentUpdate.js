import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { useWeb3React } from "@web3-react/core"
import { injectedConnector } from "../../connector";
import { useNavigate } from 'react-router-dom'

export function CommentUpdate() {
  
  const location = useLocation();

  const comment = location.state.comment;

  const {account, active, activate} = useWeb3React();

  const navigate = useNavigate();

  if (!active) {
    activate(injectedConnector);
  }

  const updateComment = () => {

    fetch('/note/comment/update',
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        noteId: 0,
        commentId: comment.commentId,
        userWalletAddress: account,
        content: content})
    })
    .then(response => response.json())
    .then(response => {
      if (response.code === "200") {
        alert(response.message);
        navigate(-1);
      } else {
        alert(response.message);
        navigate(-1);
      }
    
    })
    .catch(() => alert("양식이 올바르지 않거나 수정 권한이 없습니다."));
  }

  let content;

  const contentChange = (event) => {
    content = event.target.value;
  }

  return (
    <div>
      <h4>댓글 수정란</h4>
      <textarea cols="40" rows="40" style={{height: "100px", width: "700px"}} onChange={contentChange}/>
      <br></br>
      <br></br>
      <button type="button" onClick = { () => window.confirm('댓글을 수정하시겠습니까?') ?
           updateComment() : alert("댓글 수정이 취소되었습니다.")} >댓글 수정</button>
    </div>
    )
}