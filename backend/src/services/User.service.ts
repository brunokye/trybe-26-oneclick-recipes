/* eslint-disable import/extensions */
import { compareSync } from 'bcryptjs';
import HttpException from '../utils/http.exception';
import { createToken } from '../utils/auth';
import UserModel from '../database/models/User.model';

export type Login = {
  email: string;
  password: string;
};

export default class UserService {
  public static async login({ email, password }: Login) {
    const user = await UserModel.findOne({ where: { email } });

    if (!user) {
      throw new HttpException(401, 'Invalid email or password');
    }
    const checkPassword = compareSync(password, user.password);
    if (!checkPassword) {
      throw new HttpException(401, 'Invalid email or password');
    }
    return {
      token: createToken(user.id),
      username: user.username,
    };
  }
}
