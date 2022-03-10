import { useState } from "react";

const Home = () => {
    
    const [blogs, setBlogs] = useState([
        {title: "Hello World", body: "asdasdad", author: "Bob", id: 1},
        {title: "Hello World", body: "asdasdad", author: "jim", id: 2},
        {title: "Hello World", body: "asdasdad", author: "Bobby", id: 3},
    ]);

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <br />
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
     );
}
 
export default Home;