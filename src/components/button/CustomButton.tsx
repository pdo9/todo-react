import React from 'react';
import classes from './CustomButton.module.css';

type TCustomButtonProps = {
  type?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
};

const CustomButton: React.FC<TCustomButtonProps> = ({
  children,
  ...props
}: TCustomButtonProps) => {
  return (
    <button className={classes.CustomButton} /*{...props}*/>{children}</button>
  );
};

export default CustomButton;

// import React from 'react';
// import classes from './CustomButton.module.css';

// const CustomButton = ({ children, ...props }) => {
//   return (
//     <button className={classes.CustomButton} {...props}>
//       {children}
//     </button>
//   );
// };

// export default CustomButton;
