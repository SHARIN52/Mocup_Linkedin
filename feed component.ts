import React, { useState } from 'react';
import './Feed.css'; // Create this CSS file to style the feed
import Post from './Post';

function Feed() {
  const [posts, setPosts] = useState([
    { id: 1, name: 'John Doe', description: 'Software Engineer', message: 'This is my first post!' },
    { id: 2, name: 'Jane Doe', description: 'Product Manager', message: 'Hello LinkedIn!' }
  ]);

  return (
    <div className="feed">
      {posts.map(post => (
        <Post
          key={post.id}
          name={post.name}
          description={post.description}
          message={post.message}
        />
      ))}
    </div>
  );
}

export default Feed;