import React from 'react'
import classes from './Toast.module.css';
import { FaRegCopy } from 'react-icons/fa';

function Toast() {
  return (
    <div className={classes.toast}>
        <FaRegCopy />
        <p>Email copied to clipboard</p>
    </div>
  )
}

export default Toast