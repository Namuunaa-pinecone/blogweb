import Article from "../blog-post/Article"

const { BlogPost } = require("../blog-post/BlogPost")
const { Footer } = require("../footer/Footer")
const { Header } = require("../header/Header")

const BlogListingPage=()=>{
    return(
        <div>
            <Header/>
            <Article/>
            <Footer/>
        </div>
    )
}

export default BlogListingPage;