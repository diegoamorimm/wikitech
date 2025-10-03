import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { postService } from '../services/postService';
import './Posts.css';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

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
      setError('Falha ao carregar posts. Tente novamente mais tarde.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const getPostImage = (post) => {
    return post.image || post.imageUrl || 'https://via.placeholder.com/400x250?text=No+Image';
  };


  const filteredPosts = posts.data?.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  }) || [];

  if (loading) {
    return (
      <div className="posts-page">
        <div className="loading">Carregando posts...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="posts-page">
        <div className="error">{error}</div>
        <button onClick={fetchPosts} className="retry-btn">Tentar Novamente</button>
      </div>
    );
  }

  return (
    <div className="posts-page">
      <div className="posts-header">
        <h1>Todos os Posts</h1>
        <p>Explore nossos artigos sobre tecnologia e inovação</p>
      </div>

      <div className="posts-controls">
        <div className="search-box">
          <input
            type="text"
            placeholder="Buscar posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <span className="search-icon">🔍</span>
        </div>

        <div className="category-filter">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="category-select"
          >
            <option value="all">Todas as Categorias</option>
            <option value="gaming">Gaming</option>
            <option value="ai">Inteligência Artificial</option>
            <option value="cybersecurity">Cibersegurança</option>
            <option value="web">Desenvolvimento Web</option>
            <option value="mobile">Mobile</option>
          </select>
        </div>
      </div>

      <div className="posts-grid">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <article key={post.id} className="post-card">
              <Link to={`/posts/${post.id}`} className="post-card-link">
                <div className="post-image-container">
                  <img 
                    src={getPostImage(post)} 
                    alt={post.title} 
                    className="post-image"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/400x250?text=No+Image';
                    }}
                  />
                  {post.category && (
                    <span className="post-category-badge">{post.category}</span>
                  )}
                </div>
                <div className="post-body">
                  <h2 className="post-title">{post.title}</h2>
                  <p className="post-content">{post.content}</p>
                  <div className="post-meta">
                    <div className="post-info">
                      <span className="post-author">Por {post.author || 'Anônimo'}</span>
                      {post.createdAt && (
                        <span className="post-date">
                          {new Date(post.createdAt).toLocaleDateString('pt-BR')}
                        </span>
                      )}
                    </div>
                    <span className="read-more-link">Ler mais →</span>
                  </div>
                </div>
              </Link>
            </article>
          ))
        ) : (
          <div className="no-posts">
            {searchTerm || selectedCategory !== 'all' 
              ? 'Nenhum post encontrado com os filtros aplicados.' 
              : 'Nenhum post disponível ainda.'}
          </div>
        )}
      </div>
    </div>
  );
};

export default Posts;
