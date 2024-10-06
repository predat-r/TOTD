import { NextResponse } from "next/server";
import {  likeThought } from "@/app/lib/data";
export async function POST(req: Request) {
  const { userId, thoughtId } = await req.json();
  try {
    const response = await likeThought(userId, thoughtId);
    if (response) {
      return NextResponse.json(true, { status: 200 });
    } else {
      return NextResponse.json(false, { status: 400 });
    }
  } catch (e) {
    return NextResponse.json(false, { status: 400 });
    console.error(e);
  }
}
