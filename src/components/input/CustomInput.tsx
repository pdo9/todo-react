import React from 'react';
import classes from './CustomInput.module.css';

type TCustomInputProps = {
  type?: string;
  placeholder?: string;
  style?: React.StyleHTMLAttributes<any>;
};

const CustomInput: React.FC<TCustomInputProps> = (props: TCustomInputProps) => {
  return <input className={classes.CustomInput} {...props}></input>;
};

export default CustomInput;

// import React from 'react';
// import classes from './CustomInput.module.css';

// const CustomInput = React.forwardRef((props, ref) => {
//   return <input className={classes.CustomInput} {...props} ref={ref}></input>;
// });

// export default CustomInput;
