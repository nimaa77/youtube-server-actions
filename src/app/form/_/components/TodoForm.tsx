"use client";

import { Input } from "@/components/ui/input";

import { addTodoAction } from "../action";
import SubmitButton from "@/components/SubmitButton";
import { useRef } from "react";
import InputError from "@/components/InputError";
import { useFormState } from "react-dom";

export default function TodoForm() {
  const ref = useRef<HTMLFormElement>(null);

  const [state, formAction] = useFormState(addTodoAction, {
    error: "",
    input: "",
  });

  return (
    <form
      ref={ref}
      autoComplete="off"
      className="flex flex-row"
      action={async (formData) => {
        await formAction(formData);
        ref.current?.reset();
      }}
    >
      <div>
        <Input
          defaultValue={state.input}
          name="todo"
          type="text"
          placeholder="Go to GYM!"
        />
        {state.error && <InputError error={state.error} />}
      </div>
      <SubmitButton className="ms-2">Add todo!</SubmitButton>
    </form>
  );
}
