import React from 'react';
//import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import { Login } from './pages/login';
//import { Home } from './pages/home';
import './App.css';
import HeaderContent from './components/baseContent/HeaderContent';
import BodyContent from './components/baseContent/BodyContent';
import FooterContent from './components/baseContent/FooterContent';

function App() {
  return (
    <div>
      <HeaderContent />
      <BodyContent />
      <FooterContent />
    </div>
  );
}

export default App;
