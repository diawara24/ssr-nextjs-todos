import React from 'react';
import Link from 'next/link';
import axios from 'axios';
import Head from 'next/head';

const Home = ({ todos }) => {
  return (
    <div>
      <Head>
        <title>Todos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Liste des tâches</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Link href={`/todo/${todo.id}`}>
              {todo.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export async function getServerSideProps() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
    const todos = response.data;
    return { props: { todos } };
  } catch (error) {
    return { props: { todos: [] } };
  }
}

export default Home;