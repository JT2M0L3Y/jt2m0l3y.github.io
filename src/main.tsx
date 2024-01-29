import React from 'react';
import ReactDOM from 'react-dom/client';
import { Content, Footer } from './components';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Content />
    <Footer />
  </React.StrictMode>
)
