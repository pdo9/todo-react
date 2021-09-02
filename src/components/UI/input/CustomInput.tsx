import React from 'react';
import classes from './CustomInput.module.css';

const CustomInput: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (
  props
) => {
  return <input className={classes.CustomInput} {...props}></input>;
};

export default CustomInput;
