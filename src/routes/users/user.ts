import { Router } from 'express';
import { createUser, deleteUser, getAllUsers, getUserByID, updateUser } from '../../controller/users/index.js';

const userRoute = Router();

userRoute.get('/', getAllUsers);
userRoute.get('/:id', getUserByID);
userRoute.post('/', createUser);
userRoute.put('/:id', updateUser);
userRoute.delete('/:id', deleteUser);

export default userRoute;