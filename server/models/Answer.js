const answer = (sequelize, DataTypes) => {
  const Answer = sequelize.define("Answer", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    gameId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    guesserId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    word: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmpty: false
      }
    }
  });

  Answer.associate = models => {
    Answer.belongsTo(models.User, {
      foreignKey: "guesserId"
    });
    Answer.belongsTo(models.Game, {
      foreignKey: "gameId"
    });
  };

  return Answer;
};

module.exports = answer;
