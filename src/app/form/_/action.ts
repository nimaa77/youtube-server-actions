"use server";

import { getAuthenticatedUser } from "@/lib/auth";
import { addTodo, getTodos } from "@/db";
import { revalidatePath } from "next/cache";

export async function addTodoAction(
  prevState: {
    error: string;
    input: string;
  },
  formData: FormData
) {
  const user = await getAuthenticatedUser();

  const newTodo = formData.get("todo") as string;

  const allTodos = await getTodos(user);

  const isDuplicated = allTodos.find((todo) => todo === newTodo);

  if (isDuplicated) {
    return {
      error: "this todo is already in the list!",
      input: newTodo,
    };
  }

  await addTodo(user, newTodo);
  revalidatePath("/");

  return {
    error: "",
    input: "",
  };
}
