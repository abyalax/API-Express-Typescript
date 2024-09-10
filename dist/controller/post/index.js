import { responseData, responseFailed, responseNotFound, responseSuccess } from '../../utils/response.js';
import prisma from '../../models/prisma.js';
const getAllPosts = async (req, res) => {
    const data = await prisma.post.findMany();
    if (data)
        return responseData(res, data);
    else
        return responseNotFound(res);
};
const getPostsByID = async (req, res) => {
    const id = parseInt(req.params.id);
    const data = await prisma.post.findUnique({
        where: {
            id,
        }
    });
    if (data)
        return responseData(res, data);
    else
        return responseNotFound(res);
};
const createPosts = async (req, res) => {
    const data = await prisma.post.create({
        data: {
            title: req.body.title,
            content: req.body.content,
            published: req.body.published,
            authorId: req.body.authorId
        }
    });
    if (data)
        return responseSuccess(res);
    else
        return responseFailed(res);
};
const updatePosts = async (req, res) => {
    const id = parseInt(req.params.id);
    const data = await prisma.post.update({
        where: {
            id
        },
        data: {
            title: req.body.title,
            content: req.body.content,
            published: req.body.published,
        }
    });
    if (data)
        return responseData(res, data);
    else
        return responseNotFound(res);
};
const deletePosts = async (req, res) => {
    const id = parseInt(req.params.id);
    const data = await prisma.post.delete({
        where: {
            id,
        }
    });
    if (data)
        return responseSuccess(res);
    else
        return responseNotFound(res);
};
export { getAllPosts, getPostsByID, createPosts, updatePosts, deletePosts };
//# sourceMappingURL=index.js.map