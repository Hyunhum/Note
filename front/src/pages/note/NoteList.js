import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import '../../components/navbar/Link.css'
import { Pagination } from '../../components/pagination/Pagination';
import styled from "styled-components";

const NoteUl = styled.ul`
  float: center;
  list-style: none;
  margin: 0px;
  padding: 0px;
  width: 80%;
  margin: 0 0 0 10%;
  padding: 0;
`;

const NoteLi = styled.li`

  top: 40%;
  display: inline-flex;
  flex-wrap: wrap;
  word-break: break-all;
  font-size: 15px;
  font-weight: 600;
  width: 33%;
  height: 100%;
  border-radius: 15px;
  text-align: left;
  background-color: #f4f3ee;
  border-top: 1px solid rgba(145, 144, 148, 0.3);
  border-bottom: 1px solid rgba(145, 144, 148, 0.3);
  padding: 5px;
  margin: 5px;
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



export function NoteList() {

  const [note, setNote] = useState([]);
  const [page, setPage] = useState(1);

  let offset = page-1;
  let limit = 20;

  const query = `?offset=${offset}&limit=${limit}`

  useEffect(() => {
    fetch('/note/list' + query)
    .then(response => response.json())
    .then(note => {
      setNote(note);
    });
  }, [page])

  return (
    <div>
      <h3>전체 메모 리스트</h3>
      <NoteUl>
      {note.map(note => (
        <Link to = {`${note.noteId}`} state = {{ note: note }} className="subnav_link">
          <NoteLi key = {note.noteId}>{`제목: ${note.title.substr(0, 25)}`}
          <br></br><br></br>{`작성자: ${note.userWalletAddress}`}</NoteLi>     
        </Link>
      ))}
      </NoteUl>
      <Pagination pageChange = {setPage} page = {page} />
    </div>
    )
}