import React from 'react';
import classes from './CustomButton.module.css';

const CustomButton = ({ children, ...props }) => {
  return (
    <button className={classes.CustomButton} {...props}>
      {children}
    </button>
  );
};

export default CustomButton;
