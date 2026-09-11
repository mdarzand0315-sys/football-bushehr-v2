
export async function getNews(){
 const res=await fetch('/api/news');
 return res.json();
}

export async function getMatches(){
 const res=await fetch('/api/matches');
 return res.json();
}
