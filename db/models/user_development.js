//const users_broadcasts= require('./users_broadcasts')

module.exports = (sequelize, DataTypes) => {
  const user_deployment = sequelize.define('user_deployment', {});

  return user_deployment;
};
