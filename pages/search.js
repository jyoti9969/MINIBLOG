import { useState,useEffect } from "react";

function Search() {
  
        const [search, setSearch] = useState("");
        const [searchResults, setSearchResults] = useState([]);
    
        useEffect(() => {
            const handleSearch = () => {
                const searchBlogs = [];
                for (let i = 0; i < localStorage.length; i++) {
                    const key = localStorage.key(i);
                    const value = localStorage.getItem(key);
                    if (key.toLowerCase().includes(search.toLowerCase())) {
                        searchBlogs.push({ title: key, blog: value });
                    }
                }
                setSearchResults(searchBlogs);
            };
    
            handleSearch();
        }, [search]);


        const Deletebtn = (title) => {
            console.log("delete search title", title);
            localStorage.removeItem(title)
            setSearch((prevblog)=>prevblog.filter((blog)=>blog.title!==title))
          };

  return (
    <>
      <form className="searchContainer">
        <input
          type="text"
          placeholder="search your blog"
          name={search}
          className="searchInput"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="searchbtn"
        onClick={()=>handleSearch()}>Search</button>
      </form>

      <div className="container">
      {searchResults.map((blog,index)=>{
        return(
        <div className="blogcontainer" key={index}>
          <h3>{blog.title}</h3>
          <p>{blog.blog}</p>
          <button className="dltBlog"
             onClick={()=>Deletebtn(blog.title)}>
       
            <i className="material-icons">&#xe872;</i>
          </button>
        </div>
      )})
        
      }
      </div>
    </>
  );
}
export default Search
