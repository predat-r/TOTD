import { likedbyuser } from "@/app/lib/data";
import { NextResponse } from "next/server";
//fetch likes of a particular thought
export async function POST(req: Request) {
  const { userId, thoughtId } = await req.json();
  try {
    const liked = await likedbyuser(userId,thoughtId);
    return NextResponse.json(liked, { status: 200 });
  } catch (e) {
    return NextResponse.json(null, { status: 400 });
    console.error(e);
  }
}
