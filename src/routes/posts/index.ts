import { Router } from 'express';
import { createPosts, deletePosts, getAllPosts, getPostsByID, updatePosts } from '../../controller/post/index.js';

const PostsRoute = Router();

PostsRoute.get('/', getAllPosts);
PostsRoute.get('/:id', getPostsByID);
PostsRoute.post('/', createPosts);
PostsRoute.put('/:id', updatePosts);
PostsRoute.delete('/:id', deletePosts);

export default PostsRoute;