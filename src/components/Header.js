import React, { useState } from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [homeActive, setHomeActive] = useState(true);
  const [blogsActive, setBlogsActive] = useState(false);

  const homeHandler = () => {
    setBlogsActive(false);
    setHomeActive(true);
  };

  const blogsHandler = () => {
    setHomeActive(false);
    setBlogsActive(true);
  };

  return (
    <header className={classes.header}>
      <NavLink to="/" className={classes.logo}>
        miniblog
      </NavLink>

      <ul>
        <li>
          <i
            style={{
              color: `${
                homeActive ? 'rgb(238, 108, 77)' : 'rgb(146, 145, 145)'
              } `,
              marginRight: '5px',
            }}
            className="fa-solid fa-house fa-2x"
          ></i>
          <NavLink
            to="/"
            onClick={homeHandler}
            activeClassName={homeActive && classes.active}
          >
            Home
          </NavLink>
        </li>
        <li>
          <i
            style={{
              color: `${
                blogsActive ? 'rgb(238, 108, 77)' : 'rgb(146, 145, 145)'
              } `,
              marginRight: '5px',
            }}
            className="fa-solid fa-pen fa-2x"
          ></i>
          <NavLink
            to="/blogs"
            onClick={blogsHandler}
            activeClassName={blogsActive && classes.active}
          >
            Blogs
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
