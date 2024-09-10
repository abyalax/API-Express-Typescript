import express from 'express';
import PostsRoute from './routes/posts/index.js';
import { logRequest, validasiAccess } from './middleware/index.js';
import AuthRoute from './routes/auth/index.js';
import cookieParser from 'cookie-parser';
import UserRoute from './routes/admin/users.js';
import UserPostsRoute from './routes/users/posts.js';
import profileRoute from './routes/users/profile.js';
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(logRequest);
app.use('/api/posts', validasiAccess, PostsRoute);
app.use('/api/auth', AuthRoute);
app.use('/api/admin/users', validasiAccess, UserRoute);
app.use('/api/user', validasiAccess, UserPostsRoute);
app.use('/api/user/profile', validasiAccess, profileRoute);
app.get('/', (req, res) => {
    return res.send('Hello, TypeScript Express!');
});
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}!`);
});
//# sourceMappingURL=index.js.map