import React from 'react';

const FooterBase: React.FC = (): React.ReactElement => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <p className='footer-text'>{getFooterText()}</p>
      </div>
    </footer>
  );
};

//текст для подвала
const getFooterText = (): string => {
  let footerText: string = '';
  const startYear: number = 2021;
  const currentYear: number = new Date().getUTCFullYear();

  if (startYear < currentYear) {
    footerText = `${startYear} - ${currentYear}`;
  } else if (startYear === currentYear) {
    footerText = startYear.toString();
  } else if (startYear > currentYear) {
    footerText = currentYear.toString();
  }

  return footerText;
};

export default FooterBase;

// import React from 'react';

// export default function FooterBase() {
//   return (
//     <footer className='footer'>
//       <div className='footer-content'>
//         <p className='footer-text'>{setFooterText()}</p>
//       </div>
//     </footer>
//   );
// }

// //Текст для подвала
// function setFooterText() {
//   let footerText;
//   const startYear = 2021;
//   const currentYear = new Date().getUTCFullYear();

//   if (startYear < currentYear) {
//     footerText = `${startYear} - ${currentYear}`;
//   } else if (startYear === currentYear) {
//     footerText = startYear;
//   } else if (startYear > currentYear) {
//     footerText = currentYear;
//   }

//   return footerText;
// }
