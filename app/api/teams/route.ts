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
