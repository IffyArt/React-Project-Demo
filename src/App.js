import { useState } from 'react';

const TodoList = ({ todoList }) => {
  return (
    <ul>
      {todoList.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

const App = () => {
  const [text, setText] = useState('');
  const [todoList, setTodoList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) {
      setText('');
      return;
    }

    setTodoList([...todoList, text]);
    setText('');
  };

  return (
    <div>
      <h3>TODO</h3>
      <TodoList todoList={todoList} />
      <form onSubmit={handleSubmit}>
        <label htmlFor='new-todo'>What needs to be done?</label>
        <input
          id='new-todo'
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default App;
