import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Home from "./components/Home";
import AddPost from "./components/AddPost";
import Users from "./components/Users";
import PostDetail from "./components/PostDetail";
import Auth from "./components/Auth";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/add-post" element={<AddPost />} />
            <Route path="/users" element={<Users />} />
            <Route path="/post/:id" element={<PostDetail />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
