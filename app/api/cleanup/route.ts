import { NextResponse } from "next/server";
import { deleteOldThoughts } from "@/app/lib/data";

export async function GET() {
  try {
    const cutoffDate = Date.now() - 24 * 60 * 60 * 1000; // 24 hours ago in milliseconds

    const deleted = await deleteOldThoughts(cutoffDate);
    return NextResponse.json({ success: deleted }, { status: 200 });

  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Unable to delete thoughts" }, { status: 400 });
  }
}
