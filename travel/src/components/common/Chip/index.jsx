import React from 'react';
import './styles.css';

const Chip = ({ label , type }) => <p className={type}>{label}</p>;

export default Chip;
