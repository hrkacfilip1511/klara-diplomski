import React from "react";
import "./Home.css"; // Importirajte CSS datoteku za stilizaciju

const posts = [
  {
    id: 1,
    title: "Prvi Post",
    description: "Opis prvog posta",
    authorId: "123",
  },
  {
    id: 2,
    title: "Drugi Post",
    description: "Opis drugog posta",
    authorId: "456",
  },
  // Dodajte više postova po potrebi
];

function Home() {
  return (
    <div className="home-container">
      <h2>Lista Postova</h2>
      <ul className="post-list">
        {posts.map((post) => (
          <li key={post.id} className="post-item">
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <p>Autor ID: {post.authorId}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
