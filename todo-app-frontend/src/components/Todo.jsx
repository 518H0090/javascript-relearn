import { useEffect, useState } from "react";
import style from "../assets/css/Todo.module.css";

function Todo() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setItems([
      { id: 1, message: "Hoiaita" },
      { id: 2, message: "Chay met qua" },
      { id: 3, message: "met moi nha" },
    ]);
  }, []);

  function handleRemove(itemToRemove) {
    setItems((prevItems) =>
      prevItems.filter((item) => item.id !== itemToRemove.id)
    );
  }

  function handleAdd(e) {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newItem = {
      id: Date.now(),
      message: inputValue.trim(),
    };

    setItems((prevItems) => [...prevItems, newItem]);
    setInputValue("");
  }

  return (
    <main>
      <form onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="Add your task"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className={style.input}
        />
        <button type="submit">Add</button>
      </form>

      {items.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        items.map((item) => (
          <section key={item.id} className={style.todoList}>
            <p>{item.message}</p>
            <i
              className="fa-solid fa-x"
              onClick={() => handleRemove(item)}
              style={{ cursor: "pointer" }}
              title="Remove task"
            ></i>
          </section>
        ))
      )}
    </main>
  );
}

export default Todo;
