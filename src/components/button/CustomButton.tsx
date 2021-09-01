import React from 'react';
import classes from './CustomButton.module.css';

const CustomButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...props
}) => {
  return (
    <button className={classes.CustomButton} {...props}>
      {children}
    </button>
  );
};

export default CustomButton;
