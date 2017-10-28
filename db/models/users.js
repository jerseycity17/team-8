'use strict';

//const users_broadcasts= require('./users_broadcasts')
const bcrypt = require('bcrypt-nodejs');

module.exports = (sequelize, DataTypes) => {
  var Users = sequelize.define('Users', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    status: DataTypes.STRING,
  }, {
    getterMethods: {
      fullName() {
        return `${this.firstName} ${this.lastName}`;
      }
    }
  });

  Users.beforeCreate((user) =>
    new sequelize.Promise((resolve) => {
      bcrypt.hash(user.password, null, null, (err, hashedPassword) => {
        resolve(hashedPassword);
      });
    }).then((hashedPassword) => {
      user.password = hashedPassword;
    })
  );

  Users.associate = (models) => {
    models.Users.hasOne(models.Deployments, {through: 'user_deployment'});
    models.Users.belongsToMany(models.Broadcasts, { through: 'users_broadcasts'});
    //models.Users.hasToMany(models.Broadcasts, {as: 'target_user', through: users_broadcasts, foreignKey: 'userId'});
  }

  return Users;
};
