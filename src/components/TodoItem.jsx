import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodoComplete } from '../store/todoSlice';
import '../App.css';

const TodoItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();

  return (
        <li key={id}>
            <input type="checkbox" checked={completed} onChange={() => dispatch(toggleTodoComplete({id}))} />
            <span>{text}</span>
            <span style={{color: 'red', cursor: 'pointer'}} onClick={() => dispatch(removeTodo({id}))}> &times;</span>
        </li>
  )
}
export default TodoItem;