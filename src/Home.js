import { useEffect, useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'Hello World', body: 'lorem ipsum amet ...', author: 'santekno', id: 1 },
    { title: 'Welcome to Santekno Blog', body: 'lorem ipsum amet ...', author: 'ihsan', id: 2 },
    { title: 'Belajar ReactJs dengan Mudah', body: 'lorem ipsum amet ...', author: 'rafi', id: 3 },
    { title: 'ReactJs Mudah dipelajari', body: 'lorem ipsum amet ...', author: 'santekno', id: 4 },
  ]);

  const [name,setName] = useState("ines");

  const handleDelete = (id) => {
    const newBlog = blogs.filter(blog => blog.id !== id)
    setBlogs(newBlog);
  }

  useEffect(() => {
    console.log("use effect ran");
    console.log(name)
  },[name]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      <BlogList blogs={blogs.filter((blog) => blog.author === 'santekno')} title="Santekno Blogs" handleDelete={handleDelete} />
      <br />
      <button onClick={()=> setName('nur hendriani')}>Ubah Nama</button>
      <p>{ name }</p>
    </div>
  );
}

export default Home;