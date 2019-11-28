import React from 'react';
import './styles.css';
import { Header } from './components/Header';
import Footer from './components/Footer';
import { PostsPage } from './pages/posts';
import { PostsFormPage } from './pages/posts-form';

function App() {
  return (
    <div className="App">
      <Header />
      <PostsFormPage />
      <PostsPage />
      <Footer />
    </div>
  );
}

export default App;
