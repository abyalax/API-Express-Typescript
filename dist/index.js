import express from 'express';
import userRoute from './routes/users/user.js';
import PostsRoute from './routes/posts/index.js';
import { logRequest } from './middleware/index.js';
import AuthRoute from './routes/auth/index.js';
const app = express();
app.use(express.json());
app.use(logRequest);
app.use('/posts', PostsRoute);
app.use('/users', userRoute);
app.use('/auth', AuthRoute);
app.get('/', (req, res) => {
    return res.send('Hello, TypeScript Express!');
});
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}!`);
});
//# sourceMappingURL=index.js.map