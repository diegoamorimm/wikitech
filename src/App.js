import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DarkModeProvider } from './context/DarkModeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Posts from './pages/Posts';
import Post from './pages/Post';
import About from './pages/About';
import Contact from './pages/Contact';
import Categories from './pages/Categories';
import './App.css';

function App() {
  return (
    <DarkModeProvider>
      <Router>
        <div className="App">
          <Header />
          <main>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:id" element={<Post  />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/categories" element={<Categories />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </DarkModeProvider>
  );
}

export default App;
