import { Request, Response } from 'express';
import prisma from '../../models/prisma.js';
import { responseData, responseNotFound } from '../../utils/response.js';

const getProfile = async (req: Request, res: Response): Promise<Response> => {
  const data = await prisma.users.findUnique({
    where: {
      id: req.params.id,
    }, include : { posts: true }
  })
  if(data === null) return responseNotFound(res)
  return responseData(res, data)
};

export { getProfile }