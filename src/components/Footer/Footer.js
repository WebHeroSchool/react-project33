import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.css';

class Footer extends React.Component {

	componentDidMount() {
		console.log('Смонтировано');
	}

	componentDidUpdate() {
		console.log('Обновлено');
	}

	componentWillUnmount() {
		console.log('Размонтировано');
	}

	render() {
		const { count } = this.props;
		return (
			<div className={styles.footer}>Еще нужно сделать дел: {count}.</div>
		)
	}
};

Footer.defaultProps = {
	count: 0
};

Footer.propTypes = {
	count: PropTypes.number.isRequired
};

export default Footer;