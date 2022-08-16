import './App.css';
import Account from "./components/account/Account";
import {NoteList} from './pages/NoteList';
import {NoteCreate} from './pages/NoteCreate';
import { BrowserRouter, Router, Route, Routes, Switch } from 'react-router-dom';
import { NoteSingle } from './pages/NoteSingle';
import { NoteUpdate } from './pages/NoteUpdate';
import { CommentUpdate } from './components/comment/CommentUpdate';

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
