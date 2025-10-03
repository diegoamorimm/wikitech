import React from 'react';
import './Categories.css';

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: 'Gaming',
      icon: '🎮',
      description: 'Notícias, reviews e dicas sobre jogos e consoles',
      color: '#e74c3c',
      postCount: 85
    },
    {
      id: 2,
      name: 'database',
      icon: '🤖',
      description: 'Banco de dados, SQL, NoSQL e Big Data',
      color: '#3498db',
      postCount: 62
    },
    {
      id: 3,
      name: 'Cibersegurança',
      icon: '🔐',
      description: 'Proteção de dados, privacidade e segurança digital',
      color: '#2ecc71',
      postCount: 47
    },
    {
      id: 4,
      name: 'Desenvolvimento Web',
      icon: '🌐',
      description: 'Frontend, Backend, Full Stack e frameworks modernos',
      color: '#9b59b6',
      postCount: 120
    },
    {
      id: 5,
      name: 'Mobile',
      icon: '📱',
      description: 'Desenvolvimento iOS, Android e apps híbridos',
      color: '#f39c12',
      postCount: 73
    },
    {
      id: 6,
      name: 'Cloud Computing',
      icon: '☁️',
      description: 'AWS, Azure, Google Cloud e infraestrutura',
      color: '#1abc9c',
      postCount: 56
    },
    {
      id: 7,
      name: 'DevOps',
      icon: '⚙️',
      description: 'CI/CD, Docker, Kubernetes e automação',
      color: '#34495e',
      postCount: 41
    },
    {
      id: 8,
      name: 'Data Science',
      icon: '📊',
      description: 'Análise de dados, visualização e Big Data',
      color: '#e67e22',
      postCount: 54
    },
    {
      id: 9,
      name: 'Blockchain',
      icon: '⛓️',
      description: 'Criptomoedas, NFTs e tecnologia blockchain',
      color: '#95a5a6',
      postCount: 38
    },
    {
      id: 10,
      name: 'IoT',
      icon: '🔌',
      description: 'Internet das Coisas, dispositivos conectados',
      color: '#16a085',
      postCount: 29
    },
    {
      id: 11,
      name: 'Design',
      icon: '🎨',
      description: 'UI/UX, Design Thinking e ferramentas criativas',
      color: '#d35400',
      postCount: 64
    },
    {
      id: 12,
      name: 'Startups',
      icon: '🚀',
      description: 'Empreendedorismo, inovação e ecossistema startup',
      color: '#c0392b',
      postCount: 45
    }
  ];

  const handleCategoryClick = (categoryName) => {
    window.location.href = `/posts?category=${categoryName.toLowerCase()}`;
  };

  return (
    <div className="categories-page">
      <div className="categories-hero">
        <h1>Explore por Categoria</h1>
        <p>Descubra conteúdo sobre os tópicos que você mais gosta</p>
      </div>

      <div className="categories-stats">
        <div className="stat-item">
          <div className="stat-number">{categories.length}</div>
          <div className="stat-label">Categorias</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">
            {categories.reduce((acc, cat) => acc + cat.postCount, 0)}
          </div>
          <div className="stat-label">Total de Posts</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">
            {Math.round(categories.reduce((acc, cat) => acc + cat.postCount, 0) / categories.length)}
          </div>
          <div className="stat-label">Média por Categoria</div>
        </div>
      </div>

      <div className="categories-grid">
        {categories.map((category) => (
          <div
            key={category.id}
            className="category-card"
            onClick={() => handleCategoryClick(category.name)}
            style={{ '--category-color': category.color }}
          >
            <div className="category-icon">{category.icon}</div>
            <h3 className="category-name">{category.name}</h3>
            <p className="category-description">{category.description}</p>
            <div className="category-footer">
              <span className="post-count">{category.postCount} posts</span>
              <span className="view-link">Ver mais →</span>
            </div>
          </div>
        ))}
      </div>

      <div className="categories-cta">
        <h2>Não encontrou o que procura?</h2>
        <p>Temos muito mais conteúdo disponível. Explore todos os posts!</p>
        <a href="/posts" className="cta-button">Ver Todos os Posts</a>
      </div>
    </div>
  );
};

export default Categories;
