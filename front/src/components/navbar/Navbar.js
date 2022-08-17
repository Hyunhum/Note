import React from 'react';
import './Link.css'
import { Link } from "react-router-dom";

function Navbar () {
  
    const pages = ['list', 'creation'];
    const navLinks = pages.map(page => {
      return (
        <Link to = {'note/' + page} className="subnav_link">
          <h4 className="App-title">
            { page === 'list' ? '전체 메모 보기' :  '메모 작성하기' }
          </h4>         
        </Link>
      )
    });     

    return (
      <div>
        <nav>{navLinks}</nav>
      </div>
    );
}

export default Navbar;