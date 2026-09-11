
export function validateImage(type:string,size:number){
 const allowed=["image/jpeg","image/png","image/webp"];
 return allowed.includes(type) && size < 5*1024*1024;
}
