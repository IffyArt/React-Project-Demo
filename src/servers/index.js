import axios from 'axios';

const jsonRequest = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  headers: { 'Content-Type': 'application/json' },
  timeout: 2000,
});

const apiTodo = () => jsonRequest.get('/todos');
const apiTodoItem = (id) => jsonRequest.get(`/todos/${id}`);

const apiPostItem = (id) => jsonRequest.get(`/posts/${id}`);

export { jsonRequest, apiTodo, apiTodoItem, apiPostItem };
