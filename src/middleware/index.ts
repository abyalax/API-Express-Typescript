import { Request, Response, NextFunction } from 'express';
import { responseUnauthorized } from '../utils/response.js';
import jwt from 'jsonwebtoken';
import { Posts } from '@prisma/client';

const logRequest = (req: Request, res: Response, next: NextFunction): void => {
    const { method, url } = req;
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${method} request to ${url}`);
    next();
}

interface JwtPayload {
    id: number;
    name: string;
    email: string;
    posts: Posts[];
    iat: number;
    exp: number;
}

interface ValidasiRequest extends Request {
    user?: JwtPayload; 
}

const validasiAccess = (req: Request, res: Response, next: NextFunction) => {
    const validasiReq = req as ValidasiRequest;
    const { authorization } = validasiReq.headers;

    if (!authorization) return responseUnauthorized(res);
    const token = authorization.split(' ')[1];
    const secret = process.env.JWT_SECRET;

    try {
        const jwtDecoded = jwt.verify(token, secret) as JwtPayload;
        if (!jwtDecoded) return responseUnauthorized(res);

        validasiReq.user = jwtDecoded;
    } catch (error) {
        return responseUnauthorized(res);
    }
    next();
}

export { logRequest, validasiAccess };
