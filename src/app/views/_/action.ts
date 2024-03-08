"use server";

import { incrementViews } from "@/db";

export async function incrementViewsAction(id: string) {
  const newViews = await incrementViews(id);
  return { views: newViews };
}
