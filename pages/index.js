import styles from "@/styles/home.module.css";
import { useState, useEffect } from "react";

function Home(title, texts) {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const storedBlogs = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      storedBlogs.push({ title: key, blog: value });
    }
    setBlogs(storedBlogs);
  }, []);
  console.log(blogs);

  const Deletebtn = (title) => {
    console.log("delete search title", title);
    localStorage.removeItem(title)
    setBlogs((prevblog)=>prevblog.filter((blog)=>blog.title!==title))
  };

  return (
    <>
      <div className={styles.container}>
        {blogs.map((blog, index) => {
          return (
            <div className={styles.blogcontainer} key={index}>
              <h3>{blog.title}</h3>
              <p>{blog.blog}</p>
              <button 
                className={styles.dltBlog}
                onClick={()=>Deletebtn(blog.title)}
              >
                <i className="material-icons">&#xe872;</i>
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Home;
