module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('devs', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },

      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      github_username: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      bio: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      avatar_url: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      techs: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      location: {
        type: Sequelize.ARRAY(Sequelize.FLOAT),
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => queryInterface.dropTable('devs'),
};
