import React, {useState, useEffect} from 'react';
import { useRecoilValue } from 'recoil';
import { useWeb3React } from "@web3-react/core";

export function CommentDelete(props) {
  
  const {account} = useWeb3React();
  
  const deleteComment = () => {

    fetch('/note/comment/deletion',
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
          noteId: 0,
          commentId: props.commentId,
          userWalletAddress: account,
          content: "content"})
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
    .catch(() => alert("삭제 권한이 없습니다."));;
  }

  return (
    <div>
      <button type="button" onClick = { () => window.confirm('메모를 삭제하시겠습니까?') ?
           deleteComment() : alert("댓글 삭제가 취소되었습니다.")} >삭제하기</button>
    </div>
    )
}