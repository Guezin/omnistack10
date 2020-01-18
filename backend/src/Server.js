import express, { json } from 'express';
import 'dotenv/config';

import './database/connectionDB';
import Routes from './Routes';

class Server {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();

    this.climbServer();
  }

  climbServer() {
    this.server.listen(8080, () =>
      console.log('Server is running: https://localhost:8080')
    );
  }

  middlewares() {
    this.server.use(json());
  }

  routes() {
    this.server.use(Routes);
  }
}

export default new Server().server;
