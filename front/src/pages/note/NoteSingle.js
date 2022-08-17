import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { NoteDelete } from '../../components/note/NoteDelete';
import { Link } from "react-router-dom";
import { CommentList } from '../../components/comment/CommentList';
import { CommentCreate } from '../../components/comment/CommentCreate';
import '../../components/navbar/Link.css'
import { useWeb3React } from "@web3-react/core"
import { injectedConnector } from "../../connector";

export function NoteSingle() {

  const {active, activate} = useWeb3React();

  if (!active) {
    activate(injectedConnector);
  }

  const location = useLocation();

  const note = location.state.note;
  
  const [comment, setComment] = useState([]);
  const [noteSingle, setNoteSingle] = useState({
    content: "",
    noteId: 0,
    title: "존재하지 않는 메모입니다",
    userWalletAddress: ""
  });

  useEffect(() => {
    fetch('/note/' + note.noteId + '/comments')
    .then(response => response.json())
    .then(comment => {
      setComment(comment);
    });
  }, [])

  useEffect(() => {
    fetch('/note/' + note.noteId)
    .then(response => response.json())
    .then(noteSingle => {
      setNoteSingle(noteSingle);
    });
  }, [])

  return (
    <div>
      <br></br>
      <h3>{noteSingle.title}</h3>
      <h5>{`작성자: ${noteSingle.userWalletAddress}`}</h5>
      <h4>{noteSingle.content}</h4>
      <Link to = {"update"} state = {{ note: noteSingle }} className="subnav_link">
        <button type="button">
          수정하기
        </button>
      </Link>
      <br></br>
      <br></br>
      <NoteDelete noteId = {noteSingle.noteId} title = {noteSingle.title} content = {noteSingle.content}/>
      <br></br>
      <CommentList comments = {comment}/>
      <CommentCreate noteId = {noteSingle.noteId}/>
    </div>
    )
}