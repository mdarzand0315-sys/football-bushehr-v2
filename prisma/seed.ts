
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){

await prisma.team.createMany({
 data:[
  {name:"شاهین بوشهر", city:"بوشهر", league:"لیگ برتر"},
  {name:"پارس جنوبی جم", city:"جم", league:"لیگ برتر"}
 ]
});

await prisma.news.create({
 data:{
  title:"آغاز مسابقات فوتبال بوشهر",
  slug:"start-bushehr-football",
  content:"خبر نمونه",
  category:"فوتبال"
 }
});

}

main()
.finally(()=>prisma.$disconnect());
