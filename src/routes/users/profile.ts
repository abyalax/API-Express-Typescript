import { Router } from 'express';
import { getProfile } from '../../controller/user/profile.js';

const profileRoute = Router();

profileRoute.get('/:id', getProfile);

export default profileRoute;