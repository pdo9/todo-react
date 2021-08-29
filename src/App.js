import React from 'react';
import './App.css';
import HeaderContent from './components/baseContent/HeaderContent';
import BodyContent from './components/baseContent/BodyContent';
// import TestContent from './components_test/TestContent';
import FooterContent from './components/baseContent/FooterContent';

function App() {
  return (
    <div>
      <HeaderContent />
      <BodyContent />
      {/* <TestContent /> */}
      <FooterContent />
    </div>
  );
}

export default App;
