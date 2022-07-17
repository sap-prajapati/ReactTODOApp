import React, { useRef, useState } from "react";

function App() {
  const input_box = useRef();
  const edit_box = useRef();
  const [todos] = useState([]);
  const [foo_state, re_render] = useState(false);
  const [selected, setSelected] = useState(-1);

  const createTodo = () => {
    const todo = input_box.current.value;
    todos.push(todo);
    input_box.current.value = "";
    re_render(!foo_state);
  };

  const editTodo = (_) => {
    todos[selected] = edit_box.current.value;
    setSelected(-1);
  };

  const deleteTodo = (index) => {
    //let arr = [...todos].filter((_, i) => i !== index);
    todos.splice(index, 1);
    re_render(!foo_state);
  };

  return (
    <div className="App">
      <h1>List your task</h1>
      <input ref={input_box} type="text" placeholder="type here" />
      <button onClick={createTodo}>Submit</button>

      <ul>
        {todos.map((todo, index) => {
          return (
            <li>
              {selected === index ? (
                <>
                  <input
                    ref={edit_box}
                    type="text"
                    placeholder={todos[selected]}
                  />
                  <button onClick={editTodo}>done</button>
                </>
              ) : (
                <>
                  <span>{todo}</span>
                  <button onClick={() => deleteTodo(index)}>Delete</button>
                  <button onClick={() => setSelected(index)}>Edit</button>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;

