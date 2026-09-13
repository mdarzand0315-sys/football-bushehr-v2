import { supabase } from "@/lib/supabase";

export async function GET(){
  const { data, error } = await supabase
    .from("leagues")
    .select("*")
    .order("name", { ascending: true });

  if(error){
    return Response.json({error:error.message},{status:500});
  }

  return Response.json(data ?? []);
}

export async function POST(request: Request){
  const body = await request.json();

  const { data, error } = await supabase
    .from("leagues")
    .insert([{
      name: body.name,
      season: body.season
    }])
    .select()
    .single();

  if(error){
    return Response.json({error:error.message},{status:500});
  }

  return Response.json(data);
}
