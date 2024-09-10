import { Request, Response } from 'express';
import { responseData, responseFailed, responseNotFound, responseSuccess } from '../../utils/response.js';
import prisma from '../../models/prisma.js';

const getAllPosts = async (req: Request, res: Response): Promise<Response> => {
  const data = await prisma.posts.findMany()
  return responseData(res, data)
};

const getPostByID = async (req: Request, res: Response) => {
  const id = req.params.id
  const data = await prisma.posts.findUnique({
    where: {
      id,
    },
  })
  if (!data) {
    return responseNotFound(res)
  }
  return responseData(res, data)
}

const createPost = async (req: Request, res: Response) => {
    const { title, content, published, authorId } = req.body
  const data = await prisma.posts.create({
    data: {
      title,
      content,
      published,
      authorId,
    },
  })
  if (!data) return responseFailed(res)
  return responseData(res, data)
}

const updatePost = async (req: Request, res: Response) => {
    const { title, content, published } = req.body
  const id = req.params.id
  const data = await prisma.posts.update({
    where: {
      id,
    },
    data: {
      title, content, published
    }
  })
  if (data) return responseData(res, data)
  return responseNotFound(res)
}

const deletePost = async (req: Request, res: Response) => {
  const id = req.params.id
    const data = await prisma.posts.delete({
      where: {
        id,
      },
    })
    if (data) return responseSuccess(res)
    return responseNotFound(res)
}

export { getAllPosts, getPostByID, createPost, updatePost, deletePost };
