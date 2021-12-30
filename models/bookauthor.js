"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class bookAuthor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      bookAuthor.belongsTo(models.book);
      bookAuthor.belongsTo(models.author);
    }
  }
  bookAuthor.init(
    {
      authorId: DataTypes.INTEGER,
      bookId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "bookAuthor",
      timestamps: false,
    }
  );
  return bookAuthor;
};
