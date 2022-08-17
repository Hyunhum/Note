import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { walletState } from '../../states/walletState';
import { useWeb3React } from "@web3-react/core"
import { injectedConnector } from "../../connector";
import { useNavigate } from 'react-router-dom';

export function NoteUpdate() {
  
  const location = useLocation();

  const note = location.state.note;
  
  const {account, active, activate} = useWeb3React();

  const navigate = useNavigate();

  if (!active) {
    activate(injectedConnector);
  }

  const updateNote = () => {

    fetch('/note/update',
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
          noteId: note.noteId,
          userWalletAddress: account,
          title: title,
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

  let title;
  let content;

  const titleChange = (event) => {
    title = event.target.value;
  }

  const contentChange = (event) => {
    content = event.target.value;
  }

  return (
    <div>
      <h4>제목</h4>
      <input type = "text" style={{height: "30px", width: "700px"}} onChange={titleChange}/>
      <br></br>
      <h4>내용</h4>
      <textarea cols="40" rows="40" style={{height: "300px", width: "700px"}} onChange={contentChange}/>
      <br></br>
      <br></br>
      <button type="button" onClick = { () => window.confirm('메모를 수정하시겠습니까?') ?
           updateNote() : alert("메모 수정이 취소되었습니다.")} >메모 수정</button>
    </div>
    )
}