import Sequelize, { Model } from 'sequelize';

class Dev extends Model {
  static init(connectionDB) {
    super.init(
      {
        name: Sequelize.STRING,
        github_username: Sequelize.STRING,
        bio: Sequelize.STRING,
        avatar_url: Sequelize.STRING,
        techs: Sequelize.STRING,
        location: Sequelize.ARRAY(Sequelize.FLOAT),
      },
      {
        sequelize: connectionDB,
      }
    );

    return this;
  }
}

export default Dev;
