import React, { useEffect, useState } from "react";
import Card from "../UI/Card/Card";

const Users = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setPosts(data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return <Card>
    <h1>Users!</h1>
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  </Card>;
};

export default Users;
