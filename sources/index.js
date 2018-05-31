import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './Base/styles/main.scss';
import Footer from './Footer/components/Footer';
import Header from './Header/components/Header';
import About from './About/components/About';

ReactDOM.render(
  <div>
    <Header />
    <About />
    <Footer />
  </div>,
  document.getElementById('root'),
);
