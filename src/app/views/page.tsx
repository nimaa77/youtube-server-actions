"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

import { incrementViewsAction } from "./_/action";

const id = "1";

export default function ViewCount() {
  const [views, setViews] = useState(0);

  const updateViews = async () => {
    const { views } = await incrementViewsAction(id);
    setViews(views);
  };

  return (
    <div className="container flex flex-row gap-3 items-center pt-5">
      <p>Total Views: {views}</p>
      <Button onClick={updateViews}>Increment Views</Button>
    </div>
  );
}
