import { User } from "@/lib/auth";

let views = 0;

export async function getViews(id: string) {
  return views;
}

export async function incrementViews(id: string) {
  views++;
  return views;
}

let todos: string[];

if (!global.todos) {
  global.todos = [];
}
todos = global.todos;

export async function getTodos(_user: User) {
  return todos;
}

export async function addTodo(user: any, todo: string) {
  todos.push(todo);
  return todos;
}
