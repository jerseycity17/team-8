module.exports = (sequelize, DataTypes) => {
  const users_broadcasts = sequelize.define('users_broadcasts', {
    status: { // emergency, notification, information, checkin
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });

  return users_broadcasts;
};
