import { NextRequest } from "next/server";
import jwt from 'jsonwebtoken'

export const getDataFromToken = (req: NextRequest) => {
    try {
        const token = req.cookies.get("token")?.value || "";
        const decoded:any = jwt.verify(token, process.env.TOKEN_SECRET!);

        return decoded.id

    } catch(error:any) {
        throw new Error(error.message)
    }
}