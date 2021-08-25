import React from 'react';

export default function SidebarBase() {
  return (
    <aside className='sidebar'>
      <nav className='nav'>
        <a className='nav-link' href='/'>
          На главную
        </a>
        <a className='nav-link' href='/login'>
          Авторизация
        </a>
        <a className='nav-link' href='/logout'>
          Выход
        </a>
        <a className='nav-link' href='/test'>
          test
        </a>
      </nav>
    </aside>
  );
}
