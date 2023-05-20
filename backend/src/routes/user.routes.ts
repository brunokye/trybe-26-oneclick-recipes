import { Router } from 'express';
import userLoginVerify from '../middlewares/user.middleware';
import UserController from '../controllers/User.controller';

const userRouter = Router();

userRouter
  .post('/', userLoginVerify, UserController.login);
