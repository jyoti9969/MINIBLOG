import { useState,useEffect } from "react"

function AddBlog(){
const [title,setTitle]=useState("")
const [blog,setBlog]=useState("")
const changeTitle=(e)=>{
setTitle(e.target.value);
}
const changeBlog=(e)=>{
setBlog(e.target.value);
}

const addBlog=()=>{
console.log(title)
console.log(blog)
 localStorage.setItem(JSON.stringify(title),JSON.stringify(blog))
//   localStorage.setItem("blog",JSON.stringify(blog))
setTitle('')
setBlog('')
}
// useEffect(()=>{
//     localStorage.setItem(Date.now,JSON.stringify(title))
// })

return<>
<form>
<input type="text" placeholder="write your  Title...." name="title" className="inputBox-title" value={title}
onChange={changeTitle}  />
<input type="text" placeholder="write your mini blog...." name="blog" className="inputBox" value={blog} onChange={changeBlog}   />
</form>
    
    <br/>
    <button className="add-blog" onClick={addBlog}>Add Blog</button>
</>
}
export default AddBlog