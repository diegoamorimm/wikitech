import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <h1>Sobre o WikiTech</h1>
        <p>Seu destino favorito para tecnologia e inovação</p>
      </div>

      <div className="about-content">
        <section className="about-section">
          <div className="section-icon">🚀</div>
          <h2>Objetivo</h2>
          <p>
            O WikiTech é um blog dedicado a trazer as últimas novidades, tutoriais e insights
            sobre o mundo da tecnologia. Nossa missão é democratizar o conhecimento tecnológico
            e inspirar a próxima geração de inovadores.
          </p>
        </section>


        <section className="about-section">
          <div className="section-icon">🌟</div>
          <h2>Nossos Valores</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Inovação</h3>
              <p>Sempre buscando as últimas tendências e tecnologias emergentes</p>
            </div>
            <div className="value-card">
              <h3>Qualidade</h3>
              <p>Conteúdo bem pesquisado e verificado por especialistas</p>
            </div>
            <div className="value-card">
              <h3>Comunidade</h3>
              <p>Construindo uma comunidade engajada de entusiastas de tecnologia</p>
            </div>
            <div className="value-card">
              <h3>Acessibilidade</h3>
              <p>Tornando o conhecimento tecnológico acessível a todos</p>
            </div>
          </div>
        </section>

        <section className="about-section team-section">
          <div className="section-icon">👥</div>
          <h2>Desenvolvedor</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar">👨‍💻</div>
              <h3>Diego Amorim</h3>
              <p className="member-role">Fundador & Desenvolvedor</p>
              <p className="member-bio">
                Apaixonado por tecnologia e inovação, criando conteúdo de qualidade
                para a comunidade tech.
              </p>
            </div>
          </div>
        </section>

 

      </div>
    </div>
  );
};

export default About;
