import { getTodos } from "@/db";
import { getAuthenticatedUser } from "@/lib/auth";

import TodoForm from "./_/components/TodoForm";

export default async function FormPage() {
  const user = await getAuthenticatedUser();

  const allTodos = await getTodos(user);

  return (
    <div className="container grid place-items-center h-screen">
      <ul>
        {allTodos.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
      <TodoForm user={user} />
    </div>
  );
}
