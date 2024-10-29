import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
export async function POST(req: Request) {
  try {
    let { email, password } = await req.json();
    let user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (!user) return NextResponse.json({message:"No user Found. Try Sign In"});
    let password_check = await bcrypt.compare(password, user.password ?? "");
    return password_check
      ? NextResponse.json({ message: "true" })
      : NextResponse.json({ message: "false" });
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}
