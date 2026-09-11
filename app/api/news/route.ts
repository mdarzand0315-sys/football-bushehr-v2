
import { prisma } from "@/lib/prisma";

export async function GET(){
 const news = await prisma.news.findMany();
 return Response.json(news);
}
