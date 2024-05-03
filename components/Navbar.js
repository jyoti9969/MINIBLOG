import About from "@/pages/about"
import styles from "./Navbar.module.css"
import Link from "next/link"
import Home from "@/pages"
function Navbar(){
return(
    <>

   <div className={styles.main}>
    <div><p><b>MiniBlog</b></p></div>
    <div className={styles.mainLink}>
        <ul className={styles.ulLink}>
            <li><Link href="/">Blog</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/search">Search</Link></li>
            <li><Link href="/addblog">AddBlog</Link></li>
        </ul>
    </div>

   </div>
    
        
    </>
)
}
export default Navbar