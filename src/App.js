import React from 'react';
import './styles.css';
import { Header } from './components/Header';
import Footer from './components/Footer';
import { PostsPage } from './pages/posts';

function App() {
  return (
    <div className="App">
      <Header />
      <PostsPage />
      <Footer />
    </div>
  );
}

export default App;
