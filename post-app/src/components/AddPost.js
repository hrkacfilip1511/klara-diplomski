// AddPost.js
import React, { useState } from "react";
import "./AddPost.css"; // Importirajte CSS datoteku za stilizaciju

function AddPost() {
  const [post, setPost] = useState({
    title: "",
    description: "",
    authorId: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ovdje možete dodati logiku za slanje podataka na server ili obradu forme
    console.log("Podaci o postu:", post);
  };

  return (
    <div className="add-post-container">
      <h2>Dodajte novi post</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Naziv:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={post.title}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Opis:</label>
          <textarea
            id="description"
            name="description"
            value={post.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="authorId">ID autora:</label>
          <input
            type="text"
            id="authorId"
            name="authorId"
            value={post.authorId}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Dodaj post</button>
      </form>
    </div>
  );
}

export default AddPost;
