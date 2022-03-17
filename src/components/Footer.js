import React from 'react';
import classes from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <p className={classes.copyright}>
        miniblog &copy; 2022 by Reggie Manigos. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
