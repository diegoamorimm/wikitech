import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { postService } from '../services/postService';
import './Home.css';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await postService.getAllPosts();
      setPosts(data);
    } catch (err) {
      setError('Failed to load posts. Please try again later.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="home-container">
        <div className="loading">Carregando...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="home-container">
        <div className="error">{error}</div>
        <button onClick={fetchPosts} className="retry-btn">Tentar Novamente</button>
      </div>
    );
  }

  console.log('Posts data:', posts);

  



  return (
    <div className="home-container">
      <div className="posts-grid">
        {posts.data && posts.data.length > 0 ? (
          posts.data.map((post) => (
            
            <article key={post.id} className="post-card">
              <div className="post-image-container">
                <img 
                  src={`${post.image}`} 
                  alt={post.title} 
                  className="post-image"
                />
              </div>
              <div className="post-body">
                <h2 className="post-title">{post.title}</h2>
                <p className="post-content">{post.content}</p>
                <div className="post-meta">
                  <div className="post-info">
                    <span className="post-author">Por {post.author || 'Anônimo'}</span>
                    {post.createdAt && (
                      <span className="post-date">
                        {new Date(post.createdAt).toLocaleDateString()}
                      </span>
                    )}
                  </div>
                  <Link to={`/posts/${post.id}`} className="read-more">Leia mais →</Link>
                  
                </div>
              </div>
            </article>
          ))
        ) : (
            
          <div className="no-posts">No posts available yet.</div>
        )}
      </div>
    </div>
  );
};

export default Home;
