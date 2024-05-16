import '../App.css';

const TodoItem = ({id, text, completed, toggleTodoComplete, removeTodo}) => {
  return (
        <li key={id}>
            <input type="checkbox" checked={completed} onClick={() => toggleTodoComplete(id)} />
            <span>{text}</span>
            <span style={{color: 'red', cursor: 'pointer'}} onClick={() => removeTodo(id)}> &times;</span>
        </li>
  )
}
export default TodoItem;