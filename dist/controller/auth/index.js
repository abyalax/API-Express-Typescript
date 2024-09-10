import prisma from "../../models/prisma.js";
import bcrypt from 'bcrypt';
import { responseData, responseFailed, responseNotFound, responseUnauthenticated } from '../../utils/response.js';
const register = async (req, res) => {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const data = await prisma.user.create({
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
    const data = await prisma.user.findFirst({
        where: {
            email,
        },
    });
    const isMatch = await bcrypt.compare(password, data.password);
    if (!data)
        return responseNotFound(res);
    if (!isMatch)
        return responseUnauthenticated(res);
    const response = {
        id: data.id,
        name: data.name,
    };
    return responseData(res, response);
};
export { register, login };
//# sourceMappingURL=index.js.map