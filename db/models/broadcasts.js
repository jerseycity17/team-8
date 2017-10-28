//const users_broadcasts= require('./users_broadcasts')

module.exports = (sequelize, DataTypes) => {
  const Broadcasts = sequelize.define('Broadcasts', {
    type: { // emergency, notification, information, checkin
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    region: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });

  Broadcasts.associate = (models) => {
    models.Broadcasts.belongsToMany(models.Users, {through: 'users_broadcasts'})
    //models.Broadcasts.belongsToMany(models.Users, {as: 'broadcast_to', through: users_broadcasts, foreignKey: 'broadcastId'})
  }

  return Broadcasts;
};
