module.exports = (sequelize, DataTypes) => {
  const Deployments = sequelize.define('Deployments', {
    region: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });

  Deployments.associate = (models) => {
    models.Deployments.belongsToMany(models.Users, {through: 'user_deployment'});
  }

  return Deployments;
};
