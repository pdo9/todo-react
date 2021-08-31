import React from 'react';

const HeaderBase: React.FC = (): React.ReactElement => {
  return (
    <header className='header'>
      <div className='header-content'>
        <h1 className='header-text'>TODO-app</h1>
      </div>
    </header>
  );
};

export default HeaderBase;

// import React from 'react';

// export default function HeaderBase() {
//   return (
//     <header className='header'>
//       <div className='header-content'>
//         <h1 className='header-text'>TODO-app</h1>
//       </div>
//     </header>
//   );
// }
