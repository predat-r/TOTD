import { NextResponse } from "next/server";
import { fetchThoughts } from "../../lib/data";
import { createThought } from "../../lib/data";
import { revalidatePath } from "next/cache";
//api to retrieve thoughts for homepage
export async function GET(request: Request) {
  try {
    console.log("called at ",new Date());
    const { searchParams } = new URL(request.url);
    const pageNumber = parseInt(searchParams.get("pageNumber") || "1", 10);
    const thoughts = await fetchThoughts(pageNumber);
    return NextResponse.json(thoughts, { status: 200 });
  } catch (e) {
    console.error(e);
    return NextResponse.json([], { status: 400 });
  }
}
//creating a thought
export async function POST(request: Request) {
  const { content, authorId } = await request.json();
  try {
    const thought = await createThought({
      content: content,
      authorId: authorId,
    });
    revalidatePath("/");
    return NextResponse.json(thought, { status: 201 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ status: 400 });
  }
}
