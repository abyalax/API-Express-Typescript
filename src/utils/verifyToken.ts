import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { responseDenied, responseFailed } from "./response";

export const verifyToken = (req: Request, res: Response, callback: Function) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (err: any, decoded: any) => {
            if(decoded) {
                callback(decoded);
            } else {
                return responseFailed(res)
            }
        })
    } else {
        return responseDenied(res)
    }
}