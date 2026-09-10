
import {prisma} from "@/lib/prisma";
import {NextResponse} from "next/server";

export async function GET(){
 const news = await prisma.news.findMany();
 return NextResponse.json(news);
}

export async function POST(req:Request){
 const data = await req.json();

 const news = await prisma.news.create({
 data
 });

 return NextResponse.json(news);
}
