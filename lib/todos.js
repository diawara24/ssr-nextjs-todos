import axios from 'axios'

export const getTodods = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  return res.json();
}