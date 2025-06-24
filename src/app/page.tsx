'use client';
import { useState } from 'react';
import {TrashIcon} from "./components/trash"

export default function Home() {
  type Todo = {
  text: string;
  completed: boolean;
  };

  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo.trim() === '') return;
    setTodos([...todos, { text: todo, completed: false }]);
    setTodo('');
  };

  const toggleTodo = (index: number) => {
    setTodos(prev =>
      prev.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

 const deleteTodo = (index: number) => {
  setTodos(function (prevTodos) {
    return prevTodos.filter(function (todo, i) {
      return i !== index;
    });
  });
};

  return (
    <div className='bg-white px-52'>
      <div className='w-full text-center flex flex-col items-center '>
        <h1 className="text-2xl font-bold pt-4 ml-6 mb-3 text-gray-700">What do you want to do?</h1>
        <form onSubmit={handleAddTodo} className='flex border-4 rounded-3xl gap-2 items-center justify-center'>
          <input value={todo}
           onChange={(e) => setTodo(e.target.value)}
           type="text" placeholder="Enter a task" className="bg-white p-2 focus:outline-none rounded-2xl block text-sm font-medium text-gray-900 "></input>
          <button  type="submit" className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4  font-medium rounded-full text-sm px-5 py-2.5 text-center   ">Add</button>
        </form>
      </div>
      <ul className="mt-8 m-52 p-10 ">
        {todos.map((todo, index) => (
          <li
            key={index}
          
            className={`cursor-pointer bg-gray-100 px-4 py-3 rounded-3xl text-lg mb-2 flex justify-between`}
          >
            <span 
            className={`${todo.completed ? 'line-through text-gray-400' : 'text-gray-900'}`} 
            onClick={() => toggleTodo(index)}>
            {todo.text}</span>
            <div onClick={() => deleteTodo(index)}>
              <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 text-gray-600">
      <path
        fillRule="evenodd"
        d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
        clipRule="evenodd"
      />
              </svg>
            </div>
          </li>
        ))}
      </ul>

      
    </div>
  );
}