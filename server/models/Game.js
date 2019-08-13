const game = (sequelize, DataTypes) => {
  const Game = sequelize.define("Game", {
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      primaryKey: true
    },
    creatorId: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4
    },
    guesserId: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4
    },
    status: {
      type: DataTypes.ENUM,
      values: ["open", "in_progress", "completed"]
    },
    word: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmpty: false
      }
    }
  });

  Game.associate = models => {
    Game.belongsTo(models.User, {
      foreignKey: "creatorId"
    });
    Game.belongsTo(models.User, {
      foreignKey: "guesserId"
    });
    Game.hasMany(models.Answer, {
      foreignKey: "gameId"
    });
  };

  return Game;
};

module.exports = game;
