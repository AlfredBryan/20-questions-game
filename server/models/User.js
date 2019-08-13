const user = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        isEmail: true
      }
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  });

  User.associate = models => {
    User.hasMany(models.Game, {
      foreignKey: "creatorId"
    });
    User.hasMany(models.Game, {
      foreignKey: "guesserId"
    });
    User.hasMany(models.Answer, {
      foreignKey: "guesserId"
    });
  };

  return User;
};

module.exports = user;
