//index.js
import React, { Component } from "react";
import styles from "./index.module.css";
import cx from "classnames";
import PropTypes from "prop-types";


  
const button = (props) => (
  <button
      className={[classes.Button, classes[props.btnType]].join(' ')}
      onClick={props.clicked}>{props.children}</button>
);


export default Button;