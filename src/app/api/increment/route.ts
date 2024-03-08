import { incrementViews } from "@/db"
import { NextResponse } from "next/server"

export async function POST(
  request: Request
) {
  const formData =
    await request.formData()
  const id = formData.get(
    "id"
  ) as string

  const newViews = await incrementViews(
    id
  )
  return NextResponse.json({
    views: newViews,
  })
}
