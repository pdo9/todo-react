import React from 'react';

export default function FooterBase() {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <p className='footer-text'>{setFooterText()}</p>
      </div>
    </footer>
  );
}

//Текст для подвала
function setFooterText() {
  let footerText;
  const startYear = 2021;
  const currentYear = new Date().getUTCFullYear();

  if (startYear < currentYear) {
    footerText = `${startYear} - ${currentYear}`;
  } else if (startYear === currentYear) {
    footerText = startYear;
  } else if (startYear > currentYear) {
    footerText = currentYear;
  }

  return footerText;
}
