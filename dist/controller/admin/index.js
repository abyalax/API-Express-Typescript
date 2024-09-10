import { responseData, responseFailed, responseNotFound, responseSuccess } from '../../utils/response.js';
import prisma from '../../models/prisma.js';
const getAllUsers = async (req, res) => {
    const data = await prisma.users.findMany({ include: { posts: true } });
    return responseData(res, data);
};
const getUserByID = async (req, res) => {
    const id = req.params.id;
    const readUserByID = await prisma.users.findUnique({
        where: {
            id,
        },
        include: {
            posts: true
        }
    });
    if (!readUserByID) {
        return responseNotFound(res);
    }
    return responseData(res, readUserByID);
};
const createUser = async (req, res) => {
    const user = await prisma.users.create({
        data: {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role,
        },
    });
    if (!user)
        return responseFailed(res);
    return responseData(res, user);
};
const updateUser = async (req, res) => {
    const id = req.params.id;
    const data = await prisma.users.update({
        where: {
            id,
        },
        data: {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role,
        }
    });
    if (data)
        return responseData(res, data);
    return responseNotFound(res);
};
const deleteUser = async (req, res) => {
    const id = req.params.id;
    const data = await prisma.users.delete({
        where: {
            id,
        },
    });
    if (data)
        return responseSuccess(res);
    return responseNotFound(res);
};
export { getAllUsers, getUserByID, createUser, updateUser, deleteUser };
//# sourceMappingURL=index.js.map