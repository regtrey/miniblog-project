import React, { useState, useEffect } from 'react';
import classes from './BlogsScreen.module.css';
import axios from 'axios';

const PostsScreen = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(
          'https://miniblog-project-default-rtdb.asia-southeast1.firebasedatabase.app/.json'
        );

        const contents = [];

        if (data) {
          const keys = Object.keys(data);

          keys.map((key) => {
            return contents.push({
              id: key,
              title: data[key].title,
              content: data[key].content,
              type: data[key].contentType,
            });
          });
          setBlogs(contents);
        }
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
  }, []);

  const deleteHandler = (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.mobileBlogs}>blogs</h1>
      <h1 className={classes.pageTitle}>blogs</h1>
      <h1 className={classes.pageTitle2}>blogs</h1>
      <h1 className={classes.pageTitle3}>blogs</h1>
      <div className={classes.blogsContainer}>
        {blogs.length > 0
          ? blogs.map((blog) => (
              <div className={classes.contentContainer} key={blog.id}>
                <div className={classes.icons}>
                  <i
                    style={{
                      color: 'rgb(238, 108, 77)',
                      cursor: 'pointer',
                    }}
                    className="fa-solid fa-xmark fa-xl"
                    onClick={() => deleteHandler(blog.id)}
                  ></i>
                </div>

                <div className={classes.typeContainer}>
                  <h2
                    className={
                      blog.type === 'Personal'
                        ? [classes.type, classes.personal].join(' ')
                        : [classes.type, classes.work].join(' ')
                    }
                  >
                    {blog.type}
                  </h2>
                </div>
                <h2 className={classes.blogTitle}>{blog.title}</h2>
                <p className={classes.blogContent}>{blog.content}</p>
              </div>
            ))
          : ''}
      </div>
    </div>
  );
};

export default PostsScreen;
