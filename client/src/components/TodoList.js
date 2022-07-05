import fakeTodoList from '../helpers/fakeTodoList';
import Todo from './Todo';

export default function TodoList() {
	return (
		<ul>
			{fakeTodoList.map(todo => (
				<Todo key={todo.id} {...todo} />
			))}
		</ul>
	);
}
