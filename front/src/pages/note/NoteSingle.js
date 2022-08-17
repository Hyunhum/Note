import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { NoteDelete } from '../../components/note/NoteDelete';
import { Link } from "react-router-dom";
import { CommentList } from '../../components/comment/CommentList';
import { CommentCreate } from '../../components/comment/CommentCreate';
import '../../components/navbar/Link.css'
import { useWeb3React } from "@web3-react/core"
import { injectedConnector } from "../../connector";
import styled from "styled-components";

export function NoteSingle() {

  const NoteSingleUl = styled.ul`
  float: center;
  list-style: none;
  margin: 0px;
  padding: 0px;
  margin: 0 0 0 29%;
  padding: 0;
  `;
  const Title = styled.li`
  top: 40%;
  display: flex;
  flex-wrap: wrap;
  word-break: break-all;
  font-size: 20px;
  font-weight: 600;
  width: 58%;
  height: 100%;
  text-align: left;
  border: 1px solid rgba(145, 144, 148, 0.3);
  background-color: #f4f3ee;
  padding: 5px;  
  `;
  const User = styled.li`
  display: flex;
  flex-wrap: wrap;
  word-break: break-all;
  font-size: 15px;
  font-weight: 600;
  width: 58%;
  height: 100%;
  text-align: left;
  border: 1px solid rgba(145, 144, 148, 0.3);
  background-color: #f4f3ee;
  padding: 5px;  
  `;
  const Content = styled.li`
  display: flex;
  flex-wrap: wrap;
  word-break: break-all;
  font-size: 15px;
  font-weight: 600;
  width: 58%;
  height: 100%;
  text-align: left;
  border-right: 1px solid rgba(145, 144, 148, 0.3);
  border-left: 1px solid rgba(145, 144, 148, 0.3);
  background-color: #f4f3ee;
  padding: 5px;  
  align: center;
  `;
  const Button = styled.li`
  display: flex;
  flex-wrap: wrap;
  word-break: break-all;
  font-size: 15px;
  font-weight: 600;
  width: 58%;
  height: 100%;
  text-align: left;
  border-right: 1px solid rgba(145, 144, 148, 0.3);
  border-left: 1px solid rgba(145, 144, 148, 0.3);
  border-bottom: 1px solid rgba(145, 144, 148, 0.3);
  background-color: #f4f3ee;
  padding: 5px;  
  align: center;
  `;

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
      <NoteSingleUl>
      <Title>{noteSingle.title}</Title>
      <User>{`작성자: ${noteSingle.userWalletAddress}`}</User>
      <Content>{noteSingle.content}</Content>
      <Button>
      <Link to = {"update"} state = {{ note: noteSingle }} className="subnav_link">
        <button type="button">
          수정하기
        </button>
      </Link>
      <NoteDelete noteId = {noteSingle.noteId} title = {noteSingle.title} content = {noteSingle.content}/>
      </Button>
      </NoteSingleUl>
      <br></br>
      <CommentList comments = {comment}/>
      <CommentCreate noteId = {noteSingle.noteId}/>
    </div>
    )
}