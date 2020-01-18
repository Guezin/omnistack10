import Sequelize from 'sequelize';

import ConfigDatabase from '../config/database';
import Dev from '../app/models/Dev';

class ConnectionDB {
  constructor() {
    this.models = [Dev];

    this.init();
  }

  init() {
    const connection = new Sequelize(ConfigDatabase);

    this.models.map(model => model.init(connection));
  }
}

export default new ConnectionDB();
