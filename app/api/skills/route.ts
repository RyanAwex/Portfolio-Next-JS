import connectDB from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import Skill from "@/lib/models/Skill";

export async function GET(req: NextRequest) {
  try {
    await connectDB();

    const skills = await Skill.find().sort({ createdAt: -1 });

    return NextResponse.json(
      { skills },
      {
        status: 200,
        headers: {
          "Cache-Control": "public, s-maxage=60, stale-while-revalidate=120",
        },
      },
    );
  } catch (error) {
    console.error("Error fetching skills:", error);
    return NextResponse.json(
      { message: "Error fetching skills" },
      { status: 500 },
    );
  }
}
