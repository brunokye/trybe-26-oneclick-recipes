import { Request, Response } from 'express';
import UserService from '../services/User.service';

export default class UserController {
  public static async login(req: Request, res: Response) {
    const token = await UserService.login(req.body);

    res.status(200).json({ token });
  }
}
