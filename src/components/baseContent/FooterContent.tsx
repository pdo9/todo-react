import React from 'react';

/**
 * Подвал
 */
const FooterBase: React.FC = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <p className='footer-text'>{getFooterText()}</p>
      </div>
    </footer>
  );
};

/**
 * Возвращает текст для подвала в формате "ГГГГ - ГГГГ"
 */
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
