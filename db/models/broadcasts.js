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


  return Broadcasts;
};