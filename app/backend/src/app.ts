import * as express from 'express';
import * as cors from 'cors';
import mealsRouter from './routes/meals.routes';
import drinksRouter from './routes/drinks.routes';
import 'express-async-errors';
import errorHandler from './middlewares/errorHandler';
import userRouter from './routes/user.routes';

// const corsOptions = {
//   origin: true,
//   credentials: true,
// };

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.app.use(cors());

    this.config();

    this.app.get('/', (req, res) => res.json({ ok: true }));
    this.app.use('/meals', mealsRouter);
    this.app.use('/drinks', drinksRouter);
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);

    // route
    this.app.use('/users', userRouter);

    // error handler
    this.app.use(errorHandler);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };

// Essa segunda exportação é estratégica, e a execução dos testes de cobertura depende dela
export const { app } = new App();
