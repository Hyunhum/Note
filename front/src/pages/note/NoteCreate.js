import React, {useState, useEffect} from 'react';
import { useRecoilValue } from 'recoil';
import { walletState } from '../../states/walletState';
import { useWeb3React } from "@web3-react/core";
import { injectedConnector } from "../../connector";
import { useNavigate } from 'react-router-dom'

export function NoteCreate() {
  
  const {active, activate} = useWeb3React();

  if (!active) {
    activate(injectedConnector);
  }

  const {account} = useWeb3React();

  const navigate = useNavigate();

  const createNote = () => {

    fetch('/note/creation',
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
          noteId: 0,
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
    .catch(() => alert("양식이 올바르지 않습니다."));;
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
      <button type="button" onClick = { () => window.confirm('메모를 생성하시겠습니까?') ?
           createNote() : alert("메모 생성이 취소되었습니다.")} >메모 생성</button>
    </div>
    )
}