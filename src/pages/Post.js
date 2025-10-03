import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { postService } from '../services/postService';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './Post.css';

const Post = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await postService.getPostById(id);
        console.log(await postService.getPostById(id))
        if (data) {
          setPost(data);
        } else {
          setError('Post não encontrado');
        }
      } catch (err) {
        setError('Erro ao carregar o post. Tente novamente mais tarde.');
        console.error('Error fetching post:', err);
      } finally {
        setLoading(false);
      }
    };



    fetchPost();

    console.log(post)
    window.scrollTo(0, 0);
  }, [id]);

  const getPostImage = (post) => {
    console.log(post)
    return  post.image;
  };

  const handleViewLocation = () => {
    if (post?.location) {
      window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(post.location)}`, '_blank');
    } else {
      alert('Localização não disponível para este post');
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="post-page">
        <div className="loading">Carregando post...</div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="post-page">
        <div className="error-container">
          <div className="error">{error || 'Post não encontrado'}</div>
          <button onClick={() => navigate('/posts')} className="back-btn">
            ← Voltar para Posts
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="post-page">
      <div className="post-container">
        <nav className="breadcrumb">
          <Link to="/">Inicio</Link>
          <span>/</span>
          <Link to="/posts">Posts</Link>
          <span>/</span>
          <span>{post.title}</span>
        </nav>
        <article className="post-article">
          <header className="post-header">
            <h1 className="post-title">{post.data.title}</h1>
            
            <div className="post-meta-info">
              <div className="author-info">
                <div className="author-avatar">👤</div>
                <div className="author-details">
                  <span className="author-name">{post.data.author || 'Anônimo'}</span>
                  <span className="post-date">
                    {formatDate(post.data.created_at || post.data.createdAt)}
                  </span>
                </div>
              </div>

              
            </div>
          </header>
          <div className="post-featured-image">
            <img 
              src={getPostImage(post.data)} 
              alt={post.title}
            />
          </div>
          <div className="post-content">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.data.content}
            </ReactMarkdown>
          </div>
          <footer className="post-footer">
            <div className="post-tags">
              {post.category && (
                <span className="tag">{post.data.category}</span>
              )}
              <span className="tag">Tecnologia</span>
              <span className="tag">Inovação</span>
            </div>

            <div className="post-actions">
              <button className="share-btn" onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: post.data.title,
                    text: post.datacontent.substring(0, 100),
                    url: window.location.href
                  });
                } else {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Link copiado para a área de transferência!');
                }
              }}>
                🔗 Compartilhar
              </button>
            </div>
          </footer>
        </article>

        <div className="navigation-footer">
          <button onClick={() => navigate('/posts')} className="back-to-posts-btn">
            ← Voltar para todos os posts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
