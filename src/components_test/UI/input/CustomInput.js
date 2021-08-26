import React from 'react';
import classes from './CustomInput.module.css';

const CustomInput = React.forwardRef((props, ref) => {
  return <input className={classes.CustomInput} {...props} ref={ref}></input>;
});

export default CustomInput;
