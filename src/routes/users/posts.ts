import { Router } from "express";
import { getAllPosts, getPostByID, createPost, updatePost, deletePost } from "../../controller/user/posts.js"

const UserPostsRoute = Router();

UserPostsRoute.get('/', getAllPosts);
UserPostsRoute.get('/:id', getPostByID);
UserPostsRoute.post('/', createPost);
UserPostsRoute.put('/:id', updatePost);
UserPostsRoute.delete('/:id', deletePost);

export default UserPostsRoute;