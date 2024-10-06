import { NextResponse } from "next/server";
import { createThought } from "../../lib/data";
import { revalidatePath } from "next/cache";
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
