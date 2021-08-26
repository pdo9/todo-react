import React from 'react';

export default function SidebarBase() {
  return (
    <aside className='sidebar'>
      <nav className='nav'>
        <div>
          <a className='nav-link' href='/'>
            На главную
          </a>
        </div>
        <div>
          <a className='nav-link' href='/login'>
            Авторизация
          </a>
        </div>
        <div>
          <a className='nav-link' href='/logout'>
            Выход
          </a>
        </div>
      </nav>
    </aside>
  );
}
