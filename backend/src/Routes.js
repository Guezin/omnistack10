import { Router } from 'express';

import DevController from './app/controllers/DevController';

class Routes {
  constructor() {
    this.route = new Router();

    this.createDev();
  }

  // getDevs() {
  //   this.route.get('/devs', DevController.store);
  // }

  createDev() {
    this.route.post('/devs', DevController.store);
  }
}

export default new Routes().route;
