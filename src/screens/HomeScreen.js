import React, { useState } from 'react';
import classes from './HomeScreen.module.css';
import axios from 'axios';

const HomeScreen = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [contentType, setContentType] = useState('Personal');
  const [alert, setAlert] = useState(false);
  const [buttonAlert, setButtonAlert] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const data = { title, content, contentType };
      await axios.post(
        'https://miniblog-project-default-rtdb.asia-southeast1.firebasedatabase.app/.json',
        data
      );

      setButtonAlert(true);
      window.setTimeout(() => {
        setAlert(true);
        setButtonAlert(false);
        setTitle('');
        setContent('');
        setContentType('Personal');
      }, 1500);

      window.setTimeout(() => {
        return setAlert(false);
      }, 3000);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={classes.homeContainer}>
      {alert && (
        <div className={classes.alert}>
          <p>Blog successfully posted!</p>
        </div>
      )}

      <h1 className={classes.mobileCreate}>create</h1>
      <h1 className={classes.create}>create</h1>
      <h1 className={classes.create2}>create</h1>
      <h1 className={classes.create3}>create</h1>
      <div className={classes.formContainer}>
        <form onSubmit={submitHandler}>
          <label>Title</label>
          <input
            type="text"
            value={title}
            placeholder="Enter Title"
            maxLength="50"
            onChange={(e) => setTitle(e.target.value)}
          ></input>

          <label>Content</label>
          <textarea
            value={content}
            placeholder="Enter Text"
            maxLength="340"
            onChange={(e) => setContent(e.target.value)}
          ></textarea>

          <label>Type</label>
          <select
            value={contentType}
            onChange={(e) => setContentType(e.target.value)}
          >
            <option value="Personal">Personal</option>
            <option value="Work">Work</option>
          </select>

          <button type="submit">{buttonAlert ? 'Posting...' : 'Post'}</button>
        </form>
      </div>
    </div>
  );
};

export default HomeScreen;
