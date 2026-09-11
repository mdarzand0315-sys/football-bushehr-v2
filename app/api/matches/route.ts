
import { prisma } from "@/lib/prisma";

export async function GET(){
 const matches = await prisma.match.findMany();
 return Response.json(matches);
}
