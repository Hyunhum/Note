import React, {useState, useEffect} from 'react';
import { useRecoilValue } from 'recoil';
import { walletState } from '../../states/walletState';
import { useWeb3React } from "@web3-react/core";

export function NoteDelete(props) {
  
  const {account} = useWeb3React();
  
  const deleteNote = () => {

    fetch('/note/deletion',
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
          noteId: props.noteId,
          userWalletAddress: account,
          title: props.title,
          content: props.content})
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
    .catch(() => alert("삭제 권한이 없습니다."));
  }

  return (
    <div>
      <button type="button" onClick = { () => window.confirm('메모를 삭제하시겠습니까?') ?
           deleteNote() : alert("메모 삭제가 취소되었습니다.")} >삭제하기</button>
    </div>
    )
}