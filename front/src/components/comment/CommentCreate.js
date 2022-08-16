import React, {useState, useEffect} from 'react';
import { useRecoilValue } from 'recoil';
import { walletState } from '../../states/walletState';
import { useWeb3React } from "@web3-react/core";

export function CommentCreate(props) {
  
  const {account} = useWeb3React();

  const createComment = () => {

    fetch('/note/comment/creation',
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
          noteId: props.noteId,
          commentId: 0,
          userWalletAddress: account,
          content: content})
    })
    .then(response => response.json())
    .then(response => {
      if (response.code === "200") {
        alert(response.message);
        window.location.reload();
      } else {
        alert(response.message);
        window.location.reload();
      }
    })
    .catch(() => alert("양식이 올바르지 않습니다."));;
  }

  let content;

  const contentChange = (event) => {
    content = event.target.value;
  }

  return (
    <div>
      <h4>댓글 쓰기란</h4>
      <textarea cols="40" rows="40" style={{height: "100px", width: "700px"}} onChange={contentChange}/>
      <br></br>
      <br></br>
      <button type="button" onClick = { () => window.confirm('댓글을 생성하시겠습니까?') ?
           createComment() : alert("댓글 생성이 취소되었습니다.")} >댓글 생성</button>
    </div>
    )
}