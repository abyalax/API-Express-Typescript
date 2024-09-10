import { responseData, responseFailed, responseNotFound, responseUnauthenticated } from '../../utils/response.js';
import prisma from "../../models/prisma.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
const register = async (req, res) => {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const data = await prisma.users.create({
        data: {
            name,
            email,
            password: hashedPassword
        },
    });
    if (!data)
        return responseFailed(res);
    return responseData(res, data);
};
const login = async (req, res) => {
    const { email, password } = req.body;
    const data = await prisma.users.findUnique({
        where: {
            email,
        },
        include: {
            posts: true
        }
    });
    const isMatch = await bcrypt.compare(password, data.password);
    if (!data)
        return responseNotFound(res);
    if (!isMatch)
        return responseUnauthenticated(res);
    const secret = process.env.JWT_SECRET;
    const expired = 60 * 60 * 24 * 2; // 2 days
    const payload = {
        id: data.id,
        name: data.name,
        email: data.email,
        posts: data.posts,
    };
    const token = jwt.sign(payload, secret, {
        expiresIn: expired,
        algorithm: 'HS256'
    });
    const response = {
        ...payload,
        token
    };
    return responseData(res, response);
};
export { register, login };
//# sourceMappingURL=index.js.map