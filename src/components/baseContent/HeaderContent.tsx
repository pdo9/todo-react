import React from 'react';

/**
 * Шапка
 */
const HeaderBase: React.FC = () => {
  return (
    <header className='header'>
      <div className='header-content'>
        <h1 className='header-text'>TODO-app</h1>
      </div>
    </header>
  );
};

export default HeaderBase;
