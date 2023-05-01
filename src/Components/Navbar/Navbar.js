import React from "react";
import "./Navbar.css";
import { FaSearch, FaBell } from "react-icons/fa";

function NavBar() {
  return (
    <div className='navbar'>
      <img
        className='logo'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png'
        alt='netflix_logo'
      />
      <img
        className='avatar'
        src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png'
        alt='Avatar'
      />
      <div>
        <a href='/home' className='home'>
          Home
        </a>
        <a href='/home' className='series'>
          Series
        </a>
        <a href='/home' className='movies'>
          Movies
        </a>
        <a href='/home' className='latest'>
          Latest
        </a>
        <a href='/home' className='mylist'>
          My List
        </a>
        <button type='button' className='search-icon'>
          <FaSearch />
        </button>
        <a href='/home' className='kids'>
          KIDS
        </a>
        <a href='/home' className='dvd'>
          DVD
        </a>
        <span>
          <button type='button' className='bell-icon'>
            <FaBell />
          </button>
        </span>
      </div>
    </div>
  );
}

export default NavBar;
