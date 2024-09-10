import { responseData, responseNotFound } from '../../utils/response.js';
import prisma from '../../models/prisma.js';
const getAllPosts = async (req, res) => {
    const data = await prisma.posts.findMany();
    if (data)
        return responseData(res, data);
    else
        return responseNotFound(res);
};
export { getAllPosts };
//# sourceMappingURL=index.js.map