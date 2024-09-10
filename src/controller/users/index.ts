import { Request, Response } from 'express';
import { responseData, responseFailed, responseNotFound, responseSuccess } from '../../utils/response.js';
import prisma from '../../models/prisma.js';

const getAllUsers = async (req: Request, res: Response): Promise<Response> => {
  const data = await prisma.user.findMany()
  return responseData(res, data)
};

const getUserByID = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
  const readUserByID = await prisma.user.findUnique({
    where: {
      id,
    },
  })
  if (!readUserByID) {
    return responseNotFound(res)
  }
  return responseData(res, readUserByID)
}

const createUser = async (req: Request, res: Response) => {
  const user = await prisma.user.create({
    data: {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    },
  })
  if (!user) return responseFailed(res)
  return responseData(res, user)
}

const updateUser = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
  const data = await prisma.user.update({
    where: {
      id,
    },
    data: {
      name: req.body.name,
      email: req.body.email,
    }
  })
  if (data) return responseData(res, data)
  return responseNotFound(res)
}

const deleteUser = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
  console.log({ id });
  try {
    const data = await prisma.user.delete({
      where: {
        id,
      },
    })
    console.log({ data });
    if (data) return responseSuccess(res)
    return responseNotFound(res)
  } catch (error) {
    console.log(error);
  }
}

export { getAllUsers, getUserByID, createUser, updateUser, deleteUser };
