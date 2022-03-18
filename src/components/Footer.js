import React from 'react';
import classes from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <p className={classes.copyright}>
        Miniblog &copy; 2022 by Reggie Manigos.
        <br /> All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
