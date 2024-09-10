import prisma from '../../models/prisma.js';
import { responseData, responseNotFound } from '../../utils/response.js';
const getProfile = async (req, res) => {
    const data = await prisma.users.findUnique({
        where: {
            id: req.params.id,
        }, include: { posts: true }
    });
    if (data === null)
        return responseNotFound(res);
    return responseData(res, data);
};
export { getProfile };
//# sourceMappingURL=profile.js.map