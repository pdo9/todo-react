import React from 'react';
import './App.css';
import HeaderContent from './components/baseContent/HeaderContent';
import BodyContent from './components/baseContent/BodyContent';
import FooterContent from './components/baseContent/FooterContent';
import TsTest from './components/TsTest';

function App() {
  return (
    <div>
      <TsTest />
      <HeaderContent />
      <BodyContent />
      <FooterContent />
    </div>
  );
}

export default App;
