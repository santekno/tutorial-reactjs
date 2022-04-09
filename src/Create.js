import { useState } from "react";
import { useHistory } from 'react-router-dom';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('ihsan');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIsPending(true);
    setTimeout(() => {
      fetch("http://localhost:8000/blogs", {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog)
      }).then(() => {
        console.log("Sukses tambah blog");
        setIsPending(false);
        history.push('/');
      })
    }, 1000);
  }

  return (
    <div className="create">
      <h2>Tambah Posting Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog Body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog Author:</label>
        <select
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="ines">Ines</option>
          <option value="ihsan">Ihsan</option>
          <option value="santekno">Santekno</option>
          <option value="rafi">Rafi</option>
        </select>
        {!isPending && <button>Tambah Posting</button>}
        {isPending && <button>Tambah Posting proses...</button>}
      </form>
    </div>
  );
}

export default Create;