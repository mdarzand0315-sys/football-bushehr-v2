
export async function POST(request:Request){

const data = await request.formData();

const file = data.get("file");

return Response.json({
 success:true,
 file:String(file)
});

}
