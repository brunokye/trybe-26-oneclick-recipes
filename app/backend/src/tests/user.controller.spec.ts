import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { Response } from 'superagent';
import { app } from '../app';
import UserService from '../services/User.service';

const { expect } = chai;

chai.use(chaiHttp);

describe('Login Router', () => {
  let chaiHttpResponse: Response;

  afterEach(() => {
    sinon.restore();
  });

  describe('POST /login', () => {
    it('Deve retornar um token passando parametros corretos', async () => {
      sinon.stub(UserService, 'login').resolves({ token: 'token', username: 'test' });

      chaiHttpResponse = await chai.request(app)
        .post('/login')
        .send({
          email: 'email@email.com',
          password: '123456',
        });

      expect(chaiHttpResponse.status).to.be.equal(200);
      expect(chaiHttpResponse.body).to.be.deep.equal({ token: 'token', username: 'test' });
    });
  });
});
