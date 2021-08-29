import React from 'react';
import classes from './CustomModal.module.css';

const CustomModal = ({ children, visible, setVisible }) => {
  const rootClasses = [classes.CustomModal];

  if (visible) {
    rootClasses.push(classes.active);
  }

  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div
        className={classes.CustomModalContent}
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default CustomModal;
