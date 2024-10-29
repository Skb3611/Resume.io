import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
import { randomUUID } from "crypto";
export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();
    let user = await prisma.user.findUnique({
        where:{
            email:email
        }
    })
    if(user) return NextResponse.json({error:"Email already exists"})
    let hashedPassword = await bcrypt.hash(password,10);
    user = await prisma.user.create({
      data: {
        name,
        email,
        password:hashedPassword,
      },
    });
    await prisma.account.create({
        data:{
            userId:user.id,
            type:"custom_auth",
            provider:"custom_auth",
            providerAccountId:randomUUID(),
        }
    })

    return NextResponse.json({ message: "User created successfully" });
    
  } catch (error:any) {
    console.log(error);
    return NextResponse.json({ error: error.message });
  }
}