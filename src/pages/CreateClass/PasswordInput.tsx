import React from 'react';
import styles from './registerModal.module.scss';

// eslint-disable-next-line react/prop-types
const PasswordInput = ({
  name,
  message,
  inputType,
  placeholder,
  onChange,
  value,
  showUpMSG,
}) => {
  return (
    <div className={styles.reg_inputComponent}>
      <input
        className={styles.register_input}
        type={inputType}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        value={value}
      />
      <div className={styles.reg_errorMSG}>{showUpMSG ? message : null}</div>
    </div>
  );
};

export default PasswordInput;
