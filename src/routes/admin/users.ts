import { Router } from "express";
import { getAllUsers, createUser, deleteUser, getUserByID, updateUser } from "../../controller/admin/index.js";

const UserRoute = Router();

UserRoute.get('/', getAllUsers);
UserRoute.get('/:id', getUserByID);
UserRoute.post('/', createUser);
UserRoute.put('/:id', updateUser);
UserRoute.delete('/:id', deleteUser);

export default UserRoute;