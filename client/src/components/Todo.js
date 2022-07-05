import PropTypes from 'prop-types';
import { useState } from 'react';

export default function Todo({title, completed = false}) {
	const [isCompleted, setIsCompleted] = useState(completed);
	return (
		<li onClick={() => setIsCompleted(!isCompleted)}
			style={{textDecoration: isCompleted ? 'line-through' : 'none'}}>
			{title}
		</li>
	);
}

Todo.propTypes = {
	title: PropTypes.string.isRequired,
	completed: PropTypes.bool.isRequired
};
