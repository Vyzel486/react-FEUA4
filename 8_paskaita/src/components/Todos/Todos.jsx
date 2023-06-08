import "./Todos.css";
import { useState } from "react";
import { BsXCircleFill } from "react-icons/bs";

const Todos = () => {
  const [todos, setTodos] = useState([]); // initially empty array, this is for all todos
  const [inputValue, setInputValue] = useState(""); // initially nothing, this is what the user puts in
  const todosLength = todos.length; // initially 0, as todos is empty initially

  // when the button is clicked, add new input to todos
  const handleSubmitButton = () => {
    const newTodo = {
      id: Date.now(), // dabartinis laikas milisekundemis
      text: inputValue,
    };

    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  const handleDeleteTodo = (id) => {
    //update todos
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const listTodos = () =>
    todos.map((todo) => (
      <div className="flex topBorder paddingHalf" key={todo.id}>
        <div>{todo.text}</div>
        <BsXCircleFill
          className="icon"
          onClick={() => handleDeleteTodo(todo.id)}
        />
      </div>
    ));

  return (
    <div className="todosContainer">
      <div>
        <h3 className="textCenter">You have {todosLength} Todos</h3>
      </div>
      <div>
        {todosLength > 0 && listTodos()}
        <div className="inputDiv">
          <input
            type="text"
            className="paddingHalf"
            placeholder="Enter item"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value); // as the user types, I'm setting a new inputValue that's waiting for submit button to be clicked.
            }}
          />
          <button onClick={handleSubmitButton}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Todos;