import React from 'react';
import axios from 'axios';

const TodoDetails = ({ todo }) => {
  return (
    <div>
      <h1>{todo.title}</h1>
      <p>Status: {todo.completed ? 'Terminé' : 'En cours'}</p>
    </div>
  );
};

export async function getServerSideProps({ query }) {
  try {
    const { id } = query;
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
    const todo = response.data;
    return { props: { todo } };
  } catch (error) {
    return { props: { todo: null } };
  }
}

export default TodoDetails;
