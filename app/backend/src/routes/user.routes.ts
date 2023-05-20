import { Router } from 'express';
import regiterVerify from '../middlewares/userRegiter.middleware';
import userLoginVerify from '../middlewares/login.middleware';
import UserController from '../controllers/User.controller';

const userRouter = Router();

userRouter
  .post('/login', userLoginVerify, UserController.login)
  .post('/register', regiterVerify, UserController.register);

export default userRouter;
