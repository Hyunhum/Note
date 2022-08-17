import './App.css';
import Account from "./pages/account/Account";
import {NoteList} from './pages/note/NoteList';
import {NoteCreate} from './pages/note/NoteCreate';
import { BrowserRouter, Router, Route, Routes, Switch } from 'react-router-dom';
import { NoteSingle } from './pages/note/NoteSingle';
import { NoteUpdate } from './pages/note/NoteUpdate';
import { CommentUpdate } from './pages/comment/CommentUpdate';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path = "/" element = {<Account/>} />
        <Route exact path = "/note/list" element = {<NoteList/>} />
        <Route exact path = "/note/list/:index" element = {<NoteSingle/>} />
        <Route exact path = "/note/list/:index/update" element = {<NoteUpdate/>} />
        <Route exact path = "/note/creation" element = {<NoteCreate/>} />
        <Route exact path = "/note/list/:index/comment/:commentIndex/update" element = {<CommentUpdate/>} />
      </Routes>
    </div>
  );
}

export default App;
