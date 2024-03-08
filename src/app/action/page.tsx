"use client";

import { useFormState } from "react-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { searchAction } from "./action";

export default function Page() {
  const [state, formAction] = useFormState(searchAction, null);

  return (
    <div>
      <form action={formAction} className="p-8">
        <div className="flex flex-row gap-3">
          <Input placeholder="Search for movie" type="text" name="term" />
          <Button>Search</Button>
        </div>
      </form>
      {state}
    </div>
  );
}
