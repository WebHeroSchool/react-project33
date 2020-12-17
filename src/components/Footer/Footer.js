import React from 'react';
import styles from './Footer.module.css';

const Footer = ({count}) => (
	<div className={styles.footer}>Еще нужно сделать дел: {count}.</div>
);

Footer.defaultProps = {
	count: 0
};

export default Footer;