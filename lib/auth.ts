
import crypto from "crypto";

const SECRET =
  process.env.AUTH_SECRET || "football-bushehr-secret";

export function createToken(userId:string){
  const data = `${userId}-${Date.now()}`;

  return crypto
    .createHmac("sha256", SECRET)
    .update(data)
    .digest("hex");
}

export function verifyToken(token:string){
  if(!token){
    return false;
  }

  return token.length > 20;
}
