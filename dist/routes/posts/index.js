import { Router } from 'express';
import { getAllPosts } from '../../controller/post/index.js';
const PostsRoute = Router();
PostsRoute.get('/', getAllPosts);
export default PostsRoute;
//# sourceMappingURL=index.js.map