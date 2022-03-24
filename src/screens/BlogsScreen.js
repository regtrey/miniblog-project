import React, { useState, useEffect } from 'react';
import classes from './BlogsScreen.module.css';
import Meta from '../utils/Meta';
import { db } from '../firebase-config';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';

const PostsScreen = () => {
  const [blogs, setBlogs] = useState([]);

  const blogsCollectionRef = collection(db, 'blogs');

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getDocs(blogsCollectionRef);
        setBlogs(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [blogsCollectionRef]);

  const deleteHandler = async (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
    const blogDoc = doc(db, 'blogs', id);
    await deleteDoc(blogDoc);
  };

  return (
    <>
      <Meta title="miniblog | Blogs" />
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
                        color: 'var(--bg-accent1)',
                        cursor: 'pointer',
                      }}
                      className="fa-solid fa-xmark fa-xl"
                      onClick={() => deleteHandler(blog.id)}
                    ></i>
                  </div>

                  <div className={classes.typeContainer}>
                    <h2
                      className={
                        blog.contentType === 'Personal'
                          ? [classes.type, classes.personal].join(' ')
                          : [classes.type, classes.work].join(' ')
                      }
                    >
                      {blog.contentType}
                    </h2>
                  </div>
                  <h2 className={classes.blogTitle}>{blog.title}</h2>
                  <p className={classes.blogContent}>{blog.content}</p>
                </div>
              ))
            : ''}
        </div>
      </div>
    </>
  );
};

export default PostsScreen;
