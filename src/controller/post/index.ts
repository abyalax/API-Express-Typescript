import { Request, Response } from 'express';
import { responseData, responseNotFound } from '../../utils/response.js';
import prisma from '../../models/prisma.js';

const getAllPosts = async (req: Request, res: Response): Promise<Response> => {
  const data = await prisma.posts.findMany()
  if (data) return responseData(res, data)
  else return responseNotFound(res)
};
export { getAllPosts };
