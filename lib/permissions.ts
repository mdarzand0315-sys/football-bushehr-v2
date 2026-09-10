
export type Role =
  | "ADMIN"
  | "MEDIA_MANAGER"
  | "MATCH_MANAGER";

export function hasPermission(
 role:Role,
 section:string
){
  if(role==="ADMIN"){
    return true;
  }

  if(
    role==="MEDIA_MANAGER" &&
    (
      section==="news" ||
      section==="gallery" ||
      section==="videos"
    )
  ){
    return true;
  }

  if(
    role==="MATCH_MANAGER" &&
    (
      section==="matches" ||
      section==="results" ||
      section==="table"
    )
  ){
    return true;
  }

  return false;
}
