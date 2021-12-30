"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class author extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      author.belongsToMany(models.book, {
        through: "bookAuthor",
      });
      // author.hasMany()
    }
  }
  author.init(
    {
      authorName: DataTypes.STRING,
      address: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "author",
      timestamps: false,
    }
  );
  return author;
};
