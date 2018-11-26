import { useState } from 'react';

export default initialValue => {
  var allTodos = JSON.parse(localStorage.getItem('allTodos')) || []

  const [todos, setTodos] = useState(allTodos);

  return {
    todos,
    saveTodo: (todoText) => {
      const trimmedText = todoText.trim();
      localStorage.setItem('allTodos', JSON.stringify([...todos, todoText]))
      if (trimmedText.length > 0) {
        setTodos([...todos, todoText]);
      }
    },
    deleteTodo: (todoIndex) => {
      const newTodos = allTodos.filter((_, index) => index !== todoIndex);

      setTodos(newTodos);

      localStorage.setItem('allTodos', JSON.stringify(newTodos))
    }
  };
};
