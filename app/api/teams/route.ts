import { supabase } from "@/lib/supabase";

export async function GET(){
  const { data, error } = await supabase
    .from("teams")
    .select("*")
    .order("name", { ascending: true });

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json(data ?? []);
}

export async function POST(request: Request){
  const body = await request.json();

  const { data, error } = await supabase
    .from("teams")
    .insert([{
      name: body.name,
      city: body.city,
      league: body.league,
      logo: body.logo || null
    }])
    .select()
    .single();

  if(error){
    return Response.json({error:error.message},{status:500});
  }

  return Response.json(data);
}
