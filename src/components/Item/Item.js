import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import PropTypes from 'prop-types';

class Item extends React.Component {

	// componentDidMount() {
	// 	this.timerID = setInterval(() => console.log('Добавлена задача'), 1000);
	// }

	// componentWillUnmount() {
	// 	clearInterval(this.timerID);
	// }

	render() {
		const { task, done } = this.props;

		return (
			<div className = {
				classnames({
					[styles.task]: true,
					[styles.done]: done
				})
			}>{task}</div>
		)
	}
};

Item.defaultProps = {
	done: false
};

Item.propTypes = {
	done: PropTypes.bool.isRequired,
	task: PropTypes.string.isRequired
};

export default Item;