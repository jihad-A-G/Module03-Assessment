import { DataTypes } from "sequelize";
import sequelize from "./db.js";

const Article = sequelize.define("Article", {
  title: {
    type: DataTypes.STRING,
    allowNull:false,
  },
  body: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  img: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Article;