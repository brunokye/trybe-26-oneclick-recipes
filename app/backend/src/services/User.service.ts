import { compare, genSalt, hash } from 'bcryptjs';
import HttpException from '../utils/http.exception';
import { createToken } from '../utils/auth';
import UserModel from '../database/models/User.model';
import { Register } from '../dtos/user/register.dto';

export type Login = {
  email: string;
  password: string;
};

const SALT = process.env.SALT || 10;

export default class UserService {
  public static async login({ email, password }: Login) {
    const user = await UserModel.findOne({ where: { email } });

    if (!user) {
      throw new HttpException(401, 'Invalid email or password');
    }
    const checkPassword = await compare(password, user.password);
    if (!checkPassword) {
      throw new HttpException(401, 'Invalid email or password');
    }
    return {
      token: createToken(user.id),
      username: user.username,
    };
  }

  public static async register({ email, password, username }: Register) {
    const salt = await genSalt(+SALT);
    const passwordHash = await hash(password, salt);
    const user = new UserModel({ email, password: passwordHash, username });
    user.save();
  }
}
