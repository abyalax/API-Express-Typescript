import { responseUnauthorized } from '../utils/response.js';
import jwt from 'jsonwebtoken';
const logRequest = (req, res, next) => {
    const { method, url } = req;
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${method} request to ${url}`);
    next();
};
const validasiAccess = (req, res, next) => {
    const validasiReq = req;
    const { authorization } = validasiReq.headers;
    if (!authorization)
        return responseUnauthorized(res);
    const token = authorization.split(' ')[1];
    const secret = process.env.JWT_SECRET;
    try {
        const jwtDecoded = jwt.verify(token, secret);
        if (!jwtDecoded)
            return responseUnauthorized(res);
        validasiReq.user = jwtDecoded;
    }
    catch (error) {
        return responseUnauthorized(res);
    }
    next();
};
export { logRequest, validasiAccess };
//# sourceMappingURL=index.js.map