import connectDB from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import Project from "@/lib/models/Project";

export async function GET(req: NextRequest) {
  try {
    await connectDB();

    const projects = await Project.find().sort({ createdAt: -1 });

    return NextResponse.json(
      { projects },
      {
        status: 200,
        headers: {
          "Cache-Control": "public, s-maxage=60, stale-while-revalidate=120",
        },
      },
    );
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json(
      { message: "Error fetching projects" },
      { status: 500 },
    );
  }
}
